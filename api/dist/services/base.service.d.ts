import { IBaseRepository } from "../repositories/ibase.repository.js";
export declare abstract class BaseService<T, CreateDTO, UpdateDTO> {
    protected readonly repository: IBaseRepository<T, CreateDTO, UpdateDTO>;
    constructor(repository: IBaseRepository<T, CreateDTO, UpdateDTO>);
    findById(id: number): Promise<T | null>;
    findByIdOrFail(id: number): Promise<T>;
    findAll(): Promise<T[]>;
    create(data: CreateDTO): Promise<T>;
    update(id: number, data: UpdateDTO): Promise<T | null>;
    softDelete(id: number): Promise<void>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=base.service.d.ts.map