export class BaseService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    findById(id) {
        return this.repository.findById(id);
    }
    findByIdOrFail(id) {
        return this.repository.findByIdOrFail(id);
    }
    findAll() {
        return this.repository.findAll();
    }
    create(data) {
        return this.repository.create(data);
    }
    update(id, data) {
        return this.repository.update(id, data);
    }
    softDelete(id) {
        return this.repository.softDelete(id);
    }
    delete(id) {
        return this.repository.delete(id);
    }
}
//# sourceMappingURL=base.service.js.map