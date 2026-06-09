export class BaseRepository {
    model;
    prisma;
    modelName;
    constructor(model, prisma, modelName) {
        this.model = model;
        this.prisma = prisma;
        this.modelName = modelName;
    }
    findAll() {
        return this.model.findMany({ where: { deletedAt: null } });
    }
    findById(id) {
        return this.model.findFirst({ where: { id, deletedAt: null } });
    }
    async findByIdOrFail(id) {
        const entity = await this.findById(id);
        if (!entity)
            throw new Error(`${this.modelName} #${id} không tồn tại.`);
        return entity;
    }
    create(data) {
        return this.model.create({ data });
    }
    update(id, data) {
        return this.model.update({ where: { id }, data });
    }
    delete(id) {
        return this.model.delete({ where: { id } });
    }
    softDelete(id) {
        return this.model.update({ where: { id }, data: { deletedAt: new Date() } });
    }
}
//# sourceMappingURL=base.repository.js.map