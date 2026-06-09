import { makeResponse } from "../common/api.response.js";
export class BaseController {
    service;
    constructor(service) {
        this.service = service;
    }
    ok(res, data, message = "Success") {
        res.status(200).json(makeResponse(data, message));
    }
    created(res, data, message = "Created") {
        res.status(201).json(makeResponse(data, message));
    }
    noContent(res, message = "Deleted") {
        res.status(204).json(makeResponse(null, message));
    }
    findAll = async (_req, res, next) => {
        try {
            this.ok(res, await this.service.findAll());
        }
        catch (err) {
            next(err);
        }
    };
    findById = async (req, res, next) => {
        try {
            this.ok(res, await this.service.findByIdOrFail(Number(req.params.id)));
        }
        catch (err) {
            next(err);
        }
    };
    create = async (req, res, next) => {
        try {
            this.created(res, await this.service.create(req.body));
        }
        catch (err) {
            next(err);
        }
    };
    update = async (req, res, next) => {
        try {
            this.ok(res, await this.service.update(Number(req.params.id), req.body), "Updated");
        }
        catch (err) {
            next(err);
        }
    };
    softDelete = async (req, res, next) => {
        try {
            await this.service.softDelete(Number(req.params.id));
            this.noContent(res);
        }
        catch (err) {
            next(err);
        }
    };
}
//# sourceMappingURL=base.controller.js.map