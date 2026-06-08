import { ERROR_REGISTRY, ErrorCode } from "./error.code.js";

export class AppError extends Error {
    public readonly httpStatus: number;
    public readonly exposedStatus: number;
    constructor(
        public readonly code: ErrorCode,
        public readonly internalMessage?: string, //log
        public readonly clientMessage?: string,        // override nếu muốn custom
    ) {
        super(internalMessage);
        this.httpStatus = ERROR_REGISTRY[code].httpStatus;
        this.exposedStatus = ERROR_REGISTRY[code].expose;
        this.name = this.constructor.name;
    }
}

export function createAppError(code: ErrorCode,
    internalMessage?: string,
    clientMessage?: string
): AppError {
    return new AppError(code, internalMessage, clientMessage);
}