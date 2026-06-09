import {
    Request,
    Response,
    NextFunction,
    RequestHandler
} from "express";

export const asyncHandler =
    <
        P extends Record<string, string> = Record<string, string>,
        ResBody = any,
        ReqBody = any,
        ReqQuery = qs.ParsedQs
    >
        (fn: (
            req: Request<P, ResBody, ReqBody, ReqQuery>,
            res: Response,
            next: NextFunction) => Promise<void>): RequestHandler<P, ResBody, ReqBody, ReqQuery> =>
        (req, res, next) =>
            fn(req, res, next).catch(next);