import { CreateUserDto, UpdateUserDto } from "../dtos/user.schema.js";
import { PrismaClient, User } from "../generated/prisma/client.js";
import bcrypt from "bcrypt";

export type SafeUser = Omit<User, "password">;

export class UserService {
    constructor(private readonly db: PrismaClient) { }

    findAll(): Promise<SafeUser[]> {
        return this.db.user.findMany({
            where: { is_active: true },
            omit: { password: true },
        });
    }

    findById(id: number): Promise<SafeUser | null> {
        return this.db.user.findUnique({
            where: { id },
            omit: { password: true },
        });
    }

    async findByIdOrFail(id: number): Promise<SafeUser> {
        const user = await this.db.user.findUnique({
            where: { id },
            omit: { password: true },
        });
        if (!user) throw new Error(`User ${id} not found`);
        return user;
    }

    findByEmail(email: string): Promise<User | null> {
        return this.db.user.findUnique({ where: { email } });
    }

    async create(data: CreateUserDto): Promise<SafeUser> {
        const existing = await this.findByEmail(data.email);
        if (existing) throw new Error("Email đã tồn tại.");
        const hashed = await bcrypt.hash(data.password, 10);
        return this.db.user.create({
            data: {
                ...data,
                password: hashed,
            },
            omit: { password: true },
        });
    }

    update(id: number, data: UpdateUserDto): Promise<SafeUser> {
        const clean = Object.fromEntries(
            Object.entries(data).filter(([, v]) => v !== undefined)
        );
        return this.db.user.update({
            where: { id },
            data: clean,
            omit: { password: true },
        });
    }

    async softDelete(id: number): Promise<void> {
        await this.db.user.update({
            where: { id },
            data: { is_active: false },
        });
    }
}