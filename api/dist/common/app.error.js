import { ERROR_REGISTRY } from "./error.code.js";
export class AppError extends Error {
    code;
    internalMessage;
    clientMessage;
    httpStatus;
    exposedStatus;
    constructor(code, internalMessage, //log
    clientMessage) {
        super(internalMessage);
        this.code = code;
        this.internalMessage = internalMessage;
        this.clientMessage = clientMessage;
        this.httpStatus = ERROR_REGISTRY[code].httpStatus;
        this.exposedStatus = ERROR_REGISTRY[code].expose;
        this.name = this.constructor.name;
    }
}
export function createAppError(code, internalMessage, clientMessage) {
    return new AppError(code, internalMessage, clientMessage);
}
//# sourceMappingURL=app.error.js.map