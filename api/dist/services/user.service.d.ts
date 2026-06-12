import { CreateUserDto, UpdateUserDto } from "../dtos/user.schema.js";
import { PrismaClient, User } from "../generated/prisma/client.js";
import { PaginatedResult, QueryRequest } from "../libs/queryable.js";
export type SafeUser = Omit<User, "password">;
export declare class UserService {
    private readonly prisma;
    private readonly query;
    constructor(prisma: PrismaClient);
    findAll(req?: QueryRequest): Promise<PaginatedResult<SafeUser>>;
    findById(id: number): Promise<SafeUser | null>;
    findByIdOrFail(id: number): Promise<SafeUser>;
    findByEmail(email: string): Promise<User | null>;
    create(data: CreateUserDto): Promise<SafeUser>;
    update(id: number, data: UpdateUserDto): Promise<SafeUser>;
    softDelete(id: number): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map