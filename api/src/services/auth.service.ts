import crypto from 'crypto';
import bcrypt from 'bcrypt';
import type { AuthTokens, UserPayload } from '../types/auth.types.js';
import prisma from '../libs/prisma.js';
import { createAppError } from '../common/app.error.js';
import { LoginDto, RegisterDto } from '../dtos/auth.schema.js';
import { sessionStore } from '../libs/session.js';
import { signAccessToken } from '../libs/jwt.js';

export class AuthService {
    async login(dto: LoginDto): Promise<AuthTokens> {
        const user = await prisma.user.findUnique({ where: { email: dto.email } }).catch(() => {
            throw createAppError('UNAUTHORIZED', 'prisma.user.findUnique failed on login');
        });

        // Không phân biệt "sai email" vs "sai password" — tránh user enumeration
        if (!user || !(await bcrypt.compare(dto.password, user.password))) {
            throw createAppError('UNAUTHORIZED', `Login failed for email: ${dto.email}`);
        }

        if (!user.is_active) {
            throw createAppError('FORBIDDEN', `Inactive user attempted login: ${user.id}`);
        }

        return this.issueTokens(user.id);
    }

    async register(dto: RegisterDto): Promise<AuthTokens> {
        const exists = await prisma.user.findUnique({ where: { email: dto.email } }).catch(() => {
            throw createAppError('UNAUTHORIZED', 'prisma.user.findUnique failed on register');
        });

        if (exists) {
            throw createAppError('CONFLICT', `Email already exists: ${dto.email}`, 'Email đã được sử dụng');
        }

        const hashed = await bcrypt.hash(dto.password, 12);
        const user = await prisma.user.create({
            data: { email: dto.email, password: hashed, name: dto.name },
        }).catch(() => {
            throw createAppError('UNAUTHORIZED', 'prisma.user.create failed on register');
        });

        return this.issueTokens(user.id);
    }

    async refresh(refreshTokenUuid: string | undefined, csrfHeader: string | undefined): Promise<AuthTokens> {
        if (!refreshTokenUuid) throw createAppError('UNAUTHORIZED', 'Missing refresh token cookie');
        if (!csrfHeader) throw createAppError('UNAUTHORIZED', 'Missing X-CSRF-TOKEN header');

        const session = await sessionStore.get(refreshTokenUuid);
        if (!session) throw createAppError('UNAUTHORIZED', `Session not found or expired: ${refreshTokenUuid}`);

        if (session.csrfToken !== csrfHeader) {
            throw createAppError('FORBIDDEN', `CSRF mismatch for session: ${refreshTokenUuid}`);
        }

        // Issue trước, del sau — tránh lock-out nếu Redis fail giữa chừng
        const tokens = await this.issueTokens(session.user_id);
        await sessionStore.del(refreshTokenUuid);

        return tokens;
    }

    async logout(refreshTokenUuid: string | undefined): Promise<void> {
        if (refreshTokenUuid) await sessionStore.del(refreshTokenUuid);
    }

    async getMe(user_id: number): Promise<UserPayload> {
        const user = await prisma.user.findUnique({
            where: { id: user_id },
            select: { id: true, name: true, email: true },
        }).catch(() => {
            throw createAppError('UNAUTHORIZED', `prisma.user.findUnique failed for user_id: ${user_id}`);
        });

        if (!user) throw createAppError('NOT_FOUND', `User not found: ${user_id}`);
        return user;
    }

    private async issueTokens(user_id: number): Promise<AuthTokens> {
        const refreshTokenUuid = crypto.randomUUID();
        const csrfToken = crypto.randomUUID();

        await sessionStore.set(refreshTokenUuid, { user_id, csrfToken }).catch(() => {
            throw createAppError('UNAUTHORIZED', `Redis sessionStore.set failed for user_id: ${user_id}`);
        });

        return {
            accessToken: signAccessToken(user_id),
            csrfToken,
            refreshTokenUuid,
        };
    }
}