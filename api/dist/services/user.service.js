import bcrypt from "bcrypt";
import { Queryable } from "../libs/queryable.js";
export class UserService {
    prisma;
    query;
    constructor(prisma) {
        this.prisma = prisma;
        this.query = new Queryable(prisma.user, {
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
        // return this.prisma.user.findMany({
        //     where: { is_active: true },
        //     omit: { password: true },
        // });
        return this.query.run(req);
    }
    findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            omit: { password: true },
        });
    }
    async findByIdOrFail(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            omit: { password: true },
        });
        if (!user)
            throw new Error(`User ${id} not found`);
        return user;
    }
    findByEmail(email) {
        return this.prisma.user.findUnique({ where: { email } });
    }
    async create(data) {
        const existing = await this.findByEmail(data.email);
        if (existing)
            throw new Error("Email đã tồn tại.");
        const hashed = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                ...data,
                password: hashed,
            },
            omit: { password: true },
        });
    }
    update(id, data) {
        const clean = Object.fromEntries(Object.entries(data).filter(([, v]) => v !== undefined));
        return this.prisma.user.update({
            where: { id },
            data: clean,
            omit: { password: true },
        });
    }
    async softDelete(id) {
        await this.prisma.user.update({
            where: { id },
            data: { is_active: false },
        });
    }
}
//# sourceMappingURL=user.service.js.map