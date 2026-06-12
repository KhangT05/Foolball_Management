import { CreateRoleDto, UpdateRoleDto } from "../dtos/role.schema.js";
import { PrismaClient, Role } from "../generated/prisma/client.js";
import { PaginatedResult, QueryRequest } from "../libs/queryable.js";
export declare class RoleService {
    private readonly prisma;
    private readonly query;
    constructor(prisma: PrismaClient);
    findAll(req?: QueryRequest): Promise<PaginatedResult<Role>>;
    findById(id: number): Promise<Role | null>;
    findByIdOrFail(id: number): Promise<Role>;
    create(data: CreateRoleDto): Promise<Role>;
    update(id: number, data: UpdateRoleDto): Promise<Role>;
    softDelete(id: number): Promise<void>;
}
//# sourceMappingURL=role.service.d.ts.map