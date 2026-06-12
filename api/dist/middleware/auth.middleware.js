import { verifyAccessToken } from '../libs/jwt.js';
import { createAppError } from '../common/app.error.js';
import rateLimit from 'express-rate-limit';
export function authenticate(req, _res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return next(createAppError('UNAUTHORIZED', 'Missing access token'));
    }
    const token = authHeader.slice(7);
    try {
        const payload = verifyAccessToken(token);
        req.user_id = payload.sub;
        next();
    }
    catch {
        next(createAppError('UNAUTHORIZED', 'Invalid or expired access token'));
    }
}
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
});
export const originGuard = (req, res, next) => {
    const allowed = process.env.APP_ORIGIN ?? 'http://localhost:3000';
    const requestOrigin = (() => {
        try {
            return new URL(req.headers['origin'] ?? '').origin;
        }
        catch {
            return '';
        }
    })();
    if (allowed !== requestOrigin) {
        res.status(403).json({ message: 'Forbidden origin' });
        return;
    }
    next();
};
export async function expressAuthentication(req, securityName, _scopes) {
    if (securityName === "api") {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            throw Object.assign(new Error("Missing access token"), { status: 401 });
        }
        const token = authHeader.slice(7);
        const payload = verifyAccessToken(token); // throws nếu invalid
        return { user_id: payload.sub };
    }
    throw Object.assign(new Error("Unknown security scheme"), { status: 401 });
}
//# sourceMappingURL=auth.middleware.js.map