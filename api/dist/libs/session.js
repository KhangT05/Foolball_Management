import redis from "./redis.js";
export const REFRESH_TTL_SEC = 30 * 24 * 60 * 60; // 30 days
const key = (uuid) => `rt:${uuid}`;
export const sessionStore = {
    async set(uuid, session) {
        await redis.set(key(uuid), JSON.stringify(session), { EX: REFRESH_TTL_SEC });
    },
    async get(uuid) {
        const raw = await redis.get(key(uuid));
        return raw ? JSON.parse(raw) : null;
    },
    async del(uuid) {
        await redis.del(key(uuid));
    },
};
//# sourceMappingURL=session.js.map