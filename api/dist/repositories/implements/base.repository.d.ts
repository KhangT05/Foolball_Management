import { PrismaClient } from "../../generated/prisma/client.js";
import { IBaseRepository } from "../ibase.repository.js";
type ModelDelegate = {
    findFirst(args: any): Promise<any>;
    findMany(args?: any): Promise<any[]>;
    create(args: any): Promise<any>;
    update(args: any): Promise<any>;
    delete(args: any): Promise<any>;
};
export declare abstract class BaseRepository<T, CreateDTO, UpdateDTO> implements IBaseRepository<T, CreateDTO, UpdateDTO> {
    protected readonly model: ModelDelegate;
    protected readonly prisma: PrismaClient;
    protected readonly modelName: string;
    constructor(model: ModelDelegate, prisma: PrismaClient, modelName: string);
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    findByIdOrFail(id: number): Promise<T>;
    create(data: CreateDTO): Promise<T>;
    update(id: number, data: UpdateDTO): Promise<T | null>;
    delete(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}
export {};
//# sourceMappingURL=base.repository.d.ts.map