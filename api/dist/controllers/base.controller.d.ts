import { Request, Response, NextFunction } from "express";
import { BaseService } from "../services/base.service.js";
export declare abstract class BaseController<T, CreateDTO, UpdateDTO> {
    protected readonly service: BaseService<T, CreateDTO, UpdateDTO>;
    constructor(service: BaseService<T, CreateDTO, UpdateDTO>);
    protected ok<D>(res: Response, data: D, message?: string): void;
    protected created<D>(res: Response, data: D, message?: string): void;
    protected noContent(res: Response, message?: string): void;
    findAll: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
    findById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    softDelete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=base.controller.d.ts.map