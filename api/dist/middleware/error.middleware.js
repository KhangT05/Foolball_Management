import crypto from "crypto";
import { AppError } from "../common/app.error.js";
import { AUTH_CODE } from "../common/error.code.js";
export function errorMiddleware(err, req, res, next) {
    const requestId = req.headers["x-request-id"] ?? crypto.randomUUID();
    if (err instanceof AppError) {
        const isAuthError = AUTH_CODE.has(err.code);
        // Auth errors: luôn log internal, expose generic message — tránh leak resource existence
        console.error(`[AppError] ${err.code}: ${err.internalMessage ?? err.message} | requestId=${requestId}`);
        res.status(err.exposedStatus).json({
            status: false,
            code: isAuthError ? "FORBIDDEN" : err.code,
            message: isAuthError
                ? "Access denied"
                : (err.clientMessage ?? "Request failed"),
            data: null,
            timestamp: new Date().toISOString(),
            requestId,
        });
        return;
    }
    // Unexpected — không leak detail
    console.error("[UnhandledError]", err, `| requestId=${requestId}`);
    res.status(500).json({
        status: false,
        code: "INTERNAL_ERROR",
        message: "Something went wrong",
        data: null,
        timestamp: new Date().toISOString(),
        requestId,
    });
}
//# sourceMappingURL=error.middleware.js.map