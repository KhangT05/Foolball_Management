# Nginx Production Reference

## Mental Model

Nginx là **traffic router**, không phải runtime. Nó không quan tâm bạn dùng ngôn ngữ gì. Chỉ có 2 câu hỏi:

1. Request này trả về **static file**? → `root` + `try_files`
2. Request này cần **backend xử lý**? → `proxy_pass` (hoặc `fastcgi_pass` với PHP)

---

## SSL: Khi nào cần block 443, khi nào không

### Case 1: Nginx tự handle SSL (self-managed cert / Let's Encrypt)

Phải có cả 2 block:

```nginx
# HTTP → redirect sang HTTPS
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS → terminate SSL, proxy sang backend
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://backend:3000;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # WebSocket support (nếu cần)
        proxy_set_header Upgrade           $http_upgrade;
        proxy_set_header Connection        'upgrade';
        proxy_cache_bypass                 $http_upgrade;
    }
}
```

### Case 2: SSL terminate ở tầng trước (Cloudflare / AWS ALB / GCP LB)

Nginx chỉ cần listen 80. Block 443 **không cần và không nên**.

```nginx
server {
    listen 80;
    server_name example.com;

    # Detect original scheme qua header từ LB
    # if ($http_x_forwarded_proto != "https") {
    #     return 301 https://$host$request_uri;
    # }

    location / {
        proxy_pass http://backend:3000;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;
    }
}
```

> **Lưu ý**: Backend nhận `X-Forwarded-Proto: https` từ LB, không phải từ Nginx. Đừng hardcode scheme.

---

## Backend Stack → Nginx Config Tương Ứng

### PHP (Laravel / Symfony)

PHP không tự chạy HTTP server. Nginx giao tiếp với PHP-FPM qua FastCGI protocol.

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html/public;  # Laravel public/, không phải root project
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass   php-fpm:9000;   # container name:port hoặc unix socket
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include        fastcgi_params;
    }

    # Chặn truy cập file ẩn
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

**Lưu ý:**
- `root` phải trỏ vào `/public`, không phải root project (tránh expose `.env`)
- `fastcgi_pass` dùng unix socket (`unix:/run/php/php8.2-fpm.sock`) nếu same host, TCP nếu Docker service

### Node.js / Express / NestJS / Fastify

Node tự chạy HTTP server. Nginx chỉ reverse proxy.

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass         http://node-app:3000;
        proxy_http_version 1.1;
        proxy_set_header   Host            $host;
        proxy_set_header   X-Real-IP       $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 90s;
    }
}
```

### Python (FastAPI / Django + Gunicorn / Flask)

```nginx
location / {
    proxy_pass http://python-app:8000;
    # Gunicorn/Uvicorn không cần WebSocket headers trừ khi dùng WS
}
```

**FastAPI với WebSocket:**
```nginx
location /ws {
    proxy_pass         http://python-app:8000;
    proxy_http_version 1.1;
    proxy_set_header   Upgrade    $http_upgrade;
    proxy_set_header   Connection "upgrade";
}
```

### Go / Java (Spring Boot) / Ruby (Puma) / Rust (Axum)

Tất cả đều là HTTP server, config giống Node — chỉ thay port:

```nginx
proxy_pass http://go-app:8080;
proxy_pass http://spring-app:8080;
proxy_pass http://rails-app:3000;
```

---

## Frontend

### React / Vue / Svelte (SPA build)

```nginx
server {
    listen 80;
    server_name app.example.com;
    root /var/www/dist;  # Kết quả build

    location / {
        try_files $uri $uri/ /index.html;
        # try_files PHẢI có fallback về index.html vì React Router handle routing
    }

    # Cache static assets lâu dài (content-hashed filenames)
    location ~* \.(js|css|png|jpg|gif|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Sai thường gặp**: Không có `try_files ... /index.html` → refresh page bị 404 vì Nginx tìm file theo đường dẫn literal.

### Next.js

Next.js chạy Node server riêng (kể cả khi dùng static export). Không serve trực tiếp qua Nginx trừ khi `output: 'export'`.

**Trường hợp thường gặp (Next.js server mode):**
```nginx
location / {
    proxy_pass         http://nextjs-app:3000;
    proxy_http_version 1.1;
    proxy_set_header   Host            $host;
    proxy_set_header   X-Real-IP       $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Proto $scheme;
}
```

**Next.js static export (`output: 'export'`):**
```nginx
root /var/www/out;  # thư mục output của next build
location / {
    try_files $uri $uri.html $uri/ =404;
    # Dùng $uri.html vì Next.js tạo file page.html
}
```

---

## Fullstack Pattern (Monorepo / Cùng Domain)

```nginx
server {
    listen 443 ssl;
    server_name example.com;

    # SSL config...

    # Static uploads
    location /uploads/ {
        alias /var/www/uploads/;
        expires 30d;
    }

    # Backend API
    location /api/ {
        proxy_pass http://backend:3000/;  # Trailing slash quan trọng (xem note bên dưới)
        proxy_set_header Host            $host;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Frontend SPA
    location / {
        root /var/www/dist;
        try_files $uri /index.html;
    }
}
```

**Trailing slash trong `proxy_pass`:**
- `proxy_pass http://backend:3000` → `/api/users` forward thành `/api/users`
- `proxy_pass http://backend:3000/` → `/api/users` forward thành `/users` (strip prefix `/api`)

Chọn cái nào tùy backend routing, nhưng phải nhất quán.

---

## WebSocket

```nginx
location /socket.io/ {
    proxy_pass         http://backend:3000;
    proxy_http_version 1.1;
    proxy_set_header   Upgrade    $http_upgrade;
    proxy_set_header   Connection "upgrade";
    proxy_set_header   Host       $host;
    proxy_read_timeout 3600s;  # Tăng timeout cho long-lived connection
}
```

**Lưu ý**: Default `proxy_read_timeout` là 60s. WebSocket connection idle quá 60s sẽ bị disconnect nếu không set.

---

## Multiple Services / Subdomain Routing

### Subdomain-based (phổ biến nhất)

```nginx
# api.example.com → backend
server {
    listen 443 ssl;
    server_name api.example.com;
    # SSL config...
    location / { proxy_pass http://backend:3000; }
}

# app.example.com → frontend
server {
    listen 443 ssl;
    server_name app.example.com;
    # SSL config...
    location / {
        root /var/www/dist;
        try_files $uri /index.html;
    }
}
```

### Path-based (single domain)

Đã có ở phần Fullstack Pattern trên.

### Wildcard cert (nhiều subdomain)

```nginx
ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
server_name *.example.com;
```

---

## Load Balancing

```nginx
upstream backend_pool {
    least_conn;  # hoặc round_robin (default), ip_hash, random

    server backend-1:3000 weight=2;
    server backend-2:3000 weight=1;
    server backend-3:3000 backup;  # chỉ dùng khi 2 server trên down
}

server {
    location /api/ {
        proxy_pass http://backend_pool;
    }
}
```

**Sticky session** (cần nếu backend stateful — tránh pattern này):
```nginx
upstream backend_pool {
    ip_hash;  # cùng IP → cùng server
    server backend-1:3000;
    server backend-2:3000;
}
```

---

## Rate Limiting

```nginx
http {
    # Define zone: 10MB lưu ~160k IP
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

    server {
        location /api/ {
            limit_req zone=api_limit burst=20 nodelay;
            # burst=20: cho phép 20 req vượt rate đồng thời
            # nodelay: xử lý ngay thay vì queue
            proxy_pass http://backend:3000;
        }
    }
}
```

---

## Caching

### Static files

```nginx
location ~* \.(js|css|png|jpg|woff2|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Proxy cache (cache response từ backend)

```nginx
http {
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=api_cache:10m max_size=1g inactive=60m;

    server {
        location /api/public/ {
            proxy_cache     api_cache;
            proxy_cache_key "$scheme$request_method$host$request_uri";
            proxy_cache_valid 200 10m;
            proxy_cache_valid 404 1m;
            add_header X-Cache-Status $upstream_cache_status;
            proxy_pass http://backend:3000;
        }
    }
}
```

---

## Compression

```nginx
http {
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript
               text/xml application/xml application/xml+rss text/javascript
               image/svg+xml;
    gzip_min_length 1000;  # Không compress file nhỏ hơn 1KB
}
```

---

## Security Headers

```nginx
server {
    add_header X-Frame-Options           "SAMEORIGIN"  always;
    add_header X-Content-Type-Options    "nosniff"     always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header Referrer-Policy           "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
    # HSTS: chỉ set sau khi chắc chắn HTTPS ổn định, không thể rollback dễ

    # Ẩn Nginx version
    server_tokens off;
}
```

---

## Docker Compose Setup

```yaml
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
      - ./frontend/dist:/var/www/dist
    depends_on:
      - backend

  backend:
    build: ./backend
    expose:
      - "3000"  # expose, không phải ports — chỉ accessible trong Docker network

  certbot:
    image: certbot/certbot
    volumes:
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
```

**Lưu ý**: Backend dùng `expose` thay vì `ports` để không expose ra host. Nginx gọi được vì cùng Docker network.

---

## Let's Encrypt + Auto Renew

### Init cert lần đầu

```bash
# 1. Chạy nginx với config HTTP-only trước (chưa có cert)
# 2. Request cert
docker run --rm \
  -v ./certbot/conf:/etc/letsencrypt \
  -v ./certbot/www:/var/www/certbot \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  -d example.com -d www.example.com \
  --email admin@example.com --agree-tos --no-eff-email

# 3. Thêm HTTPS server block, reload nginx
docker compose exec nginx nginx -s reload
```

### Auto renew (cronjob)

```bash
0 12 * * * docker compose run --rm certbot renew --quiet && \
            docker compose exec nginx nginx -s reload
```

---

## Troubleshooting

| Vấn đề | Nguyên nhân thường gặp | Check |
|--------|------------------------|-------|
| 502 Bad Gateway | Backend chưa start, sai port, crash | `docker compose logs backend` |
| 504 Gateway Timeout | Backend xử lý quá lâu, `proxy_read_timeout` quá ngắn | Tăng timeout, kiểm tra backend log |
| 404 khi refresh SPA | Thiếu `try_files $uri /index.html` | Thêm fallback |
| WebSocket disconnect | `proxy_read_timeout` mặc định 60s | Tăng lên 3600s |
| SSL cert lỗi | Cert expired, sai path, certbot chưa chạy | `certbot certificates` |
| Static file không cache | Thiếu `expires` hoặc response header `no-cache` từ backend | Check `curl -I` |
| CORS error | Backend không set header, hoặc Nginx strip header | Set CORS ở backend, không ở Nginx |

```bash
# Validate nginx config trước khi reload
nginx -t
docker compose exec nginx nginx -t

# Reload không restart
nginx -s reload
docker compose exec nginx nginx -s reload

# Xem access/error log
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

---

## Quick Reference: Chọn Config Theo Stack

| Stack | Nginx làm gì | Key directive |
|-------|-------------|---------------|
| PHP (Laravel) | FastCGI bridge sang PHP-FPM | `fastcgi_pass`, `SCRIPT_FILENAME` |
| Node / Python / Go / Java | Reverse proxy HTTP | `proxy_pass` |
| React / Vue build | Serve static | `root`, `try_files $uri /index.html` |
| Next.js (server mode) | Reverse proxy sang Node | `proxy_pass http://nextjs:3000` |
| Next.js (static export) | Serve static | `try_files $uri $uri.html /index.html` |
| WebSocket | Reverse proxy + upgrade headers | `Upgrade`, `Connection`, timeout dài |
| Cloudflare/ALB trước Nginx | Chỉ listen 80, không cần block 443 | `X-Forwarded-Proto` header |

---

## Dùng IP VPS làm server_name (không có domain)

### Config cơ bản

```nginx
server {
    listen 80;
    server_name 123.456.789.0;  # IP VPS thực tế

    location / {
        proxy_pass http://backend:3000;
        proxy_set_header Host            $host;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

HTTP với IP hoạt động bình thường. Vấn đề bắt đầu khi cần HTTPS.

### Giới hạn khi dùng IP

| Scenario | Khả thi? | Lý do |
|----------|----------|-------|
| Frontend HTTP + API HTTP (cùng IP) | ✅ | Không có mixed content |
| Frontend HTTPS (Vercel/Netlify) + API HTTP (raw IP) | ❌ | Browser block mixed content |
| Frontend HTTPS + API HTTPS (IP, self-signed cert) | ⚠️ | Browser warning, user phải manually accept |
| Frontend HTTPS + API HTTPS (IP, Let's Encrypt) | ❌ | Let's Encrypt không cấp cert cho IP |
| Frontend HTTPS + API HTTPS (domain) | ✅ | Production-ready |

**Kết luận**: Nếu frontend deploy trên Vercel/Netlify (HTTPS), API **bắt buộc phải có domain** để có SSL cert hợp lệ. Đây là constraint cứng, không có workaround production-ready.

### Self-signed cert với IP (chỉ dùng cho internal / dev)

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/nginx/ssl/nginx.key \
  -out /etc/nginx/ssl/nginx.crt \
  -subj "/CN=123.456.789.0"
```

```nginx
server {
    listen 443 ssl;
    server_name 123.456.789.0;

    ssl_certificate     /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    location / {
        proxy_pass http://backend:3000;
    }
}
```

Browser hiện warning "Not secure" — user phải click "proceed anyway". **Không dùng cho production public.**

### Khi nào IP là đủ

- API chỉ gọi từ server khác (server-to-server, không qua browser)
- Internal tool trong private network
- Development / testing trước khi có domain

---

## Location Matching Priority

Đây là nguồn gốc của nhiều bug config Nginx. Thứ tự ưu tiên:

```
1. =   (exact match)          — ưu tiên cao nhất
2. ^~  (prefix, no regex)     — nếu match, dừng tìm regex
3. ~ / ~*  (regex)            — theo thứ tự xuất hiện trong file
4. /   (prefix thông thường)  — fallback
```

```nginx
location = /health {
    # Chỉ match chính xác /health
    return 200 "ok";
}

location ^~ /static/ {
    # Match /static/... và dừng, không check regex tiếp
    root /var/www;
}

location ~* \.(jpg|png|gif)$ {
    # Regex, case-insensitive
    expires 30d;
}

location / {
    # Fallback cho tất cả còn lại
    proxy_pass http://backend:3000;
}
```

**Gotcha thường gặp**: `location /api` và `location /api/` khác nhau.
- `/api` match cả `/api`, `/api/`, `/api-docs`
- `/api/` chỉ match path bắt đầu bằng `/api/`

---

## Performance Tuning Cơ Bản

```nginx
http {
    sendfile        on;    # Dùng kernel sendfile — tốt cho static files
    tcp_nopush      on;    # Gửi header và đầu file trong 1 packet
    tcp_nodelay     on;    # Tắt Nagle algorithm — tốt cho WS, SSE

    keepalive_timeout  65;
    keepalive_requests 1000;

    # Tăng nếu backend trả response header lớn (nhiều cookie, JWT dài)
    proxy_buffer_size       4k;
    proxy_buffers           8 16k;
    proxy_busy_buffers_size 32k;
}

worker_processes     auto;   # Tự detect số CPU core
worker_rlimit_nofile 65535;  # Max file descriptors — quan trọng với WebSocket

events {
    worker_connections 4096;
    multi_accept       on;
    use                epoll;  # Linux I/O model hiệu quả nhất
}
```

---

## client_max_body_size

Mặc định Nginx giới hạn request body là **1MB**. Upload file lớn hơn → `413 Request Entity Too Large`.

```nginx
http {
    client_max_body_size 10m;  # Global default
}

server {
    client_max_body_size 50m;

    location /upload {
        client_max_body_size     100m;
        proxy_request_buffering  off;  # Không buffer toàn bộ file vào RAM trước khi forward
        proxy_pass http://backend:3000;
    }
}
```

---

## Tách Config Nhiều Service (include pattern)

```
/etc/nginx/
├── nginx.conf
├── conf.d/
│   ├── api.conf
│   ├── app.conf
│   └── admin.conf
└── snippets/
    ├── ssl-params.conf
    └── proxy-headers.conf
```

```nginx
# nginx.conf
http {
    include /etc/nginx/conf.d/*.conf;
}
```

```nginx
# snippets/proxy-headers.conf — dùng chung, tránh lặp
proxy_http_version 1.1;
proxy_set_header Host              $host;
proxy_set_header X-Real-IP         $remote_addr;
proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

```nginx
# conf.d/api.conf
server {
    listen 443 ssl;
    server_name api.example.com;

    include snippets/ssl-params.conf;

    location / {
        include snippets/proxy-headers.conf;
        proxy_pass http://backend:3000;
    }
}
```

---

## Trade-offs của Nginx

"Nginx chỉ chuyển port" là happy path. Nginx là một layer trong request path — mọi layer đều có chi phí thực tế.

### 1. SSL Termination

- Traffic Nginx → backend là plain HTTP
- Nếu backend nằm trên host khác (multi-server), traffic đó unencrypted trên internal network
- **Trade-off**: simplicity vs internal security
- **Giải pháp**: mTLS giữa Nginx và backend, hoặc terminate SSL tại backend

### 2. Single Point of Failure

- Không có Nginx redundancy → toàn bộ service down
- **Trade-off**: đơn giản vs reliability
- **Giải pháp**: Nginx active-passive với `keepalived`, hoặc dùng managed LB (ALB, Cloudflare)

### 3. Buffering Behavior

- Nginx buffer response từ backend trước khi gửi client
- Với streaming / SSE / large file upload: buffer tăng latency, tốn RAM
- Phải tắt: `proxy_buffering off` cho SSE, `proxy_request_buffering off` cho large upload
- **Trade-off**: throughput optimization vs latency

### 4. Connection Handling

- `worker_connections` và `worker_processes` giới hạn concurrent connections
- Default config không đủ cho high traffic
- C10k problem vẫn cần config đúng: `use epoll`, `multi_accept on`

```nginx
worker_processes auto;
events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}
```

### 5. WebSocket / Long-polling

- Mỗi WS connection giữ 1 file descriptor mở
- `worker_rlimit_nofile` phải tăng tương ứng
- **Trade-off**: resource consumption vs connection count

```nginx
worker_rlimit_nofile 65535;
```

### 6. Proxy Cache Consistency

- Cache stale content → consistency issue nếu backend data thay đổi
- Cache storage trên disk → I/O overhead
- Không có built-in cache invalidation pub/sub — phải dùng `proxy_cache_bypass` header từ backend

### 7. Rate Limiting Accuracy

- `limit_req_zone $binary_remote_addr` rate limit per-IP
- Sau NAT hoặc Cloudflare → nhiều user cùng IP → rate limit sai đối tượng
- Distributed rate limiting thực sự cần Redis ở tầng backend, không phải Nginx

### 8. Auth-gated Static Files

- Nginx serve static file nhanh hơn Node/PHP trực tiếp
- Nhưng nếu file cần auth check trước khi serve (private uploads) → Nginx không tự làm được
- Phải dùng `X-Accel-Redirect`: backend verify auth → trả header → Nginx serve file

```nginx
location /protected/ {
    internal;  # Chỉ accessible qua X-Accel-Redirect, không phải direct request
    alias /var/www/private/;
}
```

```
Backend: verify JWT → response header X-Accel-Redirect: /protected/file.pdf
Nginx: nhận header → serve /var/www/private/file.pdf
```

**Trade-off**: performance vs access control complexity

---

## Nguyên Tắc: Mọi Abstraction Layer Đều Có Chi Phí

Nginx không phải ngoại lệ. Đây là pattern áp dụng cho mọi tool trong stack.

### Docker

| Vấn đề | Chi phí thực tế |
|--------|----------------|
| Overlay filesystem | I/O chậm hơn bare metal ~10-15% |
| Network namespace | Thêm hop, DNS resolution giữa container |
| Volume mount | Permission mismatch giữa host UID và container UID |
| Restart policy sai | Cascade failure khi dependency chưa ready |
| OOM killer | Terminate container không đúng lúc, không có graceful shutdown |
| Image layer tích tụ | Registry storage tăng dần, `docker system prune` phải chạy định kỳ |

### CI/CD

| Tool | Chi phí thực tế |
|------|----------------|
| **Jenkins** | Master là SPOF; plugin ecosystem fragile khi upgrade; Groovy không có type safety; agent pool sizing sai → build queue |
| **GitLab CI** | Runner autoscaling phức tạp hơn doc nói; artifact/cache storage tăng không kiểm soát; self-hosted GitLab ~4GB RAM minimum; `needs:` dependency dễ tạo deadlock |
| **GitHub Actions** | Vendor lock-in; concurrent job limit theo plan; secret management yếu hơn Vault; self-hosted runner có security surface nếu không isolate |

### Trade-off Axes Chung

```
Complexity      ←→  Control
Convenience     ←→  Visibility
Abstraction     ←→  Performance
Automation      ←→  Debuggability
```

Tool càng "magic" (làm nhiều thứ tự động) thì khi fail càng khó hiểu tại sao.

- **Jenkins**: verbose, khó setup, nhưng bạn biết chính xác từng bước đang làm gì
- **GitHub Actions**: setup 5 phút, nhưng khi runner có vấn đề bạn có ít control hơn nhiều

### Câu Hỏi Đúng Khi Adopt Tool

Không phải *"tool này có tốt không"* mà là:

1. Chi phí này có justify so với vấn đề nó giải quyết không?
2. Khi nó fail, team có đủ khả năng debug không?
3. Operational cost dài hạn là bao nhiêu?

**Nginx**: đơn giản, battle-tested, failure mode rõ ràng → chi phí thấp, justify gần như mọi trường hợp.

**Kubernetes**: chi phí vận hành cao, learning curve dốc → chỉ justify khi scale thực sự cần và team đủ lớn để maintain.