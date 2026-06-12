import { Queryable } from "../libs/queryable.js";
export class RoleService {
    prisma;
    query;
    constructor(prisma) {
        this.prisma = prisma;
        this.query = new Queryable(prisma.role, {
            searchFields: ["name", "description"],
            sortable: ["id", "name", "created_at"],
            defaultSort: { column: "id", direction: "asc" },
            filterable: ["is_active"],
            defaultPerPage: 20,
            maxPerPage: 100,
            beforeBuild: (where) => {
                where.push({ is_active: true });
            },
        });
    }
    findAll(req = {}) {
        return this.query.run(req);
    }
    findById(id) {
        return this.prisma.role.findUnique({
            where: { id },
        });
    }
    async findByIdOrFail(id) {
        const role = await this.prisma.role.findUnique({
            where: { id },
        });
        if (!role)
            throw new Error(`Role ${id} not found`);
        return role;
    }
    async create(data) {
        return this.prisma.role.create({
            data: data
        });
    }
    async update(id, data) {
        await this.findByIdOrFail(id);
        return this.prisma.role.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        await this.findByIdOrFail(id);
        await this.prisma.role.update({
            where: { id },
            data: { is_active: false },
        });
    }
}
//# sourceMappingURL=role.service.js.map