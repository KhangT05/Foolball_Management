// middleware/error.middleware.ts
import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import { AppError } from "../common/app.error.js";
import { AUTH_CODE } from "../common/error.code.js";

export function errorMiddleware(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const requestId = (req.headers["x-request-id"] as string) ?? crypto.randomUUID();

    if (err instanceof AppError) {

        const isAuthError = AUTH_CODE.has(err.code);

        res.status(err.exposedStatus).json({
            status: false,
            code: isAuthError ? "FORBIDDEN" : err.code,
            message: isAuthError
                ? "Access denied"
                : (err.clientMessage ?? "Request failed"),
            requestId,
        });
        return;
    }

    res.status(500).json({
        status: false,
        code: "INTERNAL_ERROR",
        message: "Something went wrong",
        requestId,
    });
}