# Auth Flow

## Kiến trúc tổng quan

```
Client
  │
  ├─ POST /auth/login | /auth/register
  │     → set httpOnly cookie (refresh_token, path=/auth/refresh)
  │     → trả access_token + csrf_token trong body
  │
  ├─ Mọi API call: Authorization: Bearer <access_token>
  │
  ├─ POST /auth/refresh
  │     → gửi cookie tự động (httpOnly)
  │     → gửi X-CSRF-TOKEN header (lưu in-memory/localStorage)
  │     → nhận access_token + csrf_token mới
  │
  └─ POST /auth/logout
        → xóa session Redis + clear cookie
```

## Token strategy

| Token | Lưu ở đâu | TTL | Mục đích |
|---|---|---|---|
| Access token (JWT) | Memory / biến JS | 15 phút | Authorize API requests |
| Refresh token UUID | httpOnly cookie | 30 ngày | Lấy access token mới |
| CSRF token | Memory / localStorage | = refresh token | Chống CSRF attack trên /refresh |

Access token **không lưu localStorage** — XSS có thể đọc được.  
Refresh token httpOnly cookie **không đọc được bằng JS** — chỉ trình duyệt tự gửi.  
CSRF token buộc attacker phải có JS execution để đọc → CSRF attack bị chặn.

## File structure

```
src/
├── redis/
│   └── session.ts          # sessionStore: set/get/del rt:{uuid}
├── services/
│   └── auth.service.ts     # login, register, refresh, logout, getMe
├── controllers/
│   └── auth.controller.ts  # parse request, set cookie, format response
└── routes/
    └── auth.router.ts      # rate limiter, origin guard, route mapping
```

## Redis session schema

```
Key:   rt:{uuid}
Value: { userId: number, csrfToken: string }
TTL:   2592000s (30 ngày)
```

Không lưu `wasUsed` — reuse detection đơn giản hơn: token cũ bị `del` ngay sau khi issue token mới thành công. Nếu token cũ được dùng lại → Redis miss → 401.

## Refresh flow chi tiết

```
1. Đọc cookie refresh_token UUID
2. Đọc header X-CSRF-TOKEN
3. sessionStore.get(uuid) → null = 401
4. session.csrfToken !== header = 401
5. issueTokens(userId)     ← tạo session mới trong Redis
6. sessionStore.del(uuid)  ← xóa session cũ
7. Set cookie mới + trả token mới
```

Thứ tự step 5 → 6 quan trọng: issue trước, del sau. Nếu đảo lại và `issueTokens` fail sau khi del → user bị lock out.

## Middleware

### Rate limiter (`/login`, `/register`)
- 10 request / 15 phút / IP+email
- Chặn brute force credential

### Origin guard (`/refresh`)
- Kiểm tra `Origin` hoặc `Referer` header phải match `APP_ORIGIN`
- `sameSite: lax` không bảo vệ cross-origin POST từ subdomain bị compromise

### authenticate (tất cả route cần auth)
- Verify JWT từ `Authorization: Bearer`
- Inject `req.userId`
- Phân biệt `TokenExpiredError` (401) vs `JsonWebTokenError` (400)

## Cookie config

```typescript
{
  httpOnly: true,
  secure:   true,        // chỉ HTTPS (production)
  sameSite: 'lax',
  maxAge:   30 * 24 * 60 * 60 * 1000,
  path:     '/auth/refresh',  // scope hẹp — không gửi cookie ra ngoài endpoint này
}
```

`path: '/auth/refresh'` thay vì `'/'` — giảm attack surface, cookie không bị gửi kèm mọi request.

## App-level setup (bắt buộc)

```typescript
import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cookieParser());  // phải có trước router — req.cookies sẽ undefined nếu thiếu
```

## Error types

| Class | HTTP |
|---|---|
| `UnauthorizedError` | 401 |
| `ForbiddenError` | 403 |
| `ConflictError` | 409 |
| `NotFoundError` | 404 |
| `SecurityError` | 401 |

Dùng với error handler middleware:

```typescript
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status ?? 500;
  res.status(status).json({ message: err.message ?? 'Internal server error' });
});
```

## TypeScript augmentation

```typescript
// src/types/express.d.ts
declare namespace Express {
  interface Request {
    userId: number;
  }
}
```

## ENV vars

| Var | Mô tả | Example |
|---|---|---|
| `NODE_ENV` | `production` bật secure cookie | `production` |
| `APP_ORIGIN` | Origin được phép gọi /refresh | `https://yourdomain.com` |
| `JWT_SECRET` | Ký access token | random 256-bit |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |