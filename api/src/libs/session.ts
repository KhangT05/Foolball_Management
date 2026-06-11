import redis from "./redis.js";

export const REFRESH_TTL_SEC = 30 * 24 * 60 * 60; // 30 days

export interface RefreshSession {
    user_id: number;
    csrfToken: string;
}

const key = (uuid: string) => `rt:${uuid}`;

export const sessionStore = {
    async set(uuid: string, session: RefreshSession): Promise<void> {
        await redis.set(key(uuid), JSON.stringify(session), { EX: REFRESH_TTL_SEC });
    },

    async get(uuid: string): Promise<RefreshSession | null> {
        const raw = await redis.get(key(uuid));
        return raw ? (JSON.parse(raw) as RefreshSession) : null;
    },

    async del(uuid: string): Promise<void> {
        await redis.del(key(uuid));
    },
};