import { createClient } from 'redis';
const redis = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    socket: {
        reconnectStrategy: (retries) => Math.min(retries * 100, 3000),
    },
});
redis.on('error', (err) => console.error('[Redis]', err));
export async function connectRedis() {
    await redis.connect();
}
export default redis;
//# sourceMappingURL=redis.js.map