import { ErrorCode } from "./error.code.js";
export declare class AppError extends Error {
    readonly code: ErrorCode;
    readonly internalMessage?: string | undefined;
    readonly clientMessage?: string | undefined;
    readonly httpStatus: number;
    readonly exposedStatus: number;
    constructor(code: ErrorCode, internalMessage?: string | undefined, //log
    clientMessage?: string | undefined);
}
export declare function createAppError(code: ErrorCode, internalMessage?: string, clientMessage?: string): AppError;
//# sourceMappingURL=app.error.d.ts.map