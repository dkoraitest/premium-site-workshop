# Деплой

Варианты бесплатного хостинга для статических сайтов с serverless functions.

## Сравнение платформ

| Платформа | Бесплатный tier | Functions | Доступность из РФ | Примечания |
|-----------|----------------|-----------|-------------------|------------|
| **Netlify** | 100 GB bandwidth | Netlify Functions (AWS Lambda) | Да | Основной выбор. Есть нюансы с видео (HTTP/2 + bandwidth). |
| **Cloudflare Pages** | Безлимитный bandwidth | Cloudflare Workers | Да | Лучший для РФ — CDN-ноды в России, нет лимита на трафик. |
| **Vercel** | 100 GB bandwidth | Vercel Functions (Edge) | Нестабильно в РФ | Может быть заблокирован. Лучший DX для Next.js. |
| **GitHub Pages** | 100 GB bandwidth | Нет | Да | Только статика. Для сайтов без бэкенда. |

## Рекомендация для РФ

**Cloudflare Pages** — лучший вариант для российской аудитории:
- Безлимитный bandwidth (видео не проблема)
- CDN-ноды в России (быстрая загрузка)
- Workers для serverless functions
- Нет проблем с блокировками

**Netlify** — хороший второй вариант, но bandwidth ограничен на бесплатном тире (100 GB). Для сайтов с тяжёлым видео может не хватить.

## Netlify

### Деплой
```bash
# Через CLI
npm install -g netlify-cli
netlify login
netlify init        # привязать к репо
netlify deploy --prod

# Или: подключить GitHub-репо через dashboard → автодеплой на push
```

### netlify.toml
```toml
[build]
  publish = "."

[functions]
  directory = "netlify/functions"

[[redirects]]
  from = "/api/submit"
  to = "/.netlify/functions/submit"
  status = 200
  force = true
```

### ENV-переменные
Site settings → Environment variables → добавить TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.

### Нюанс с видео
На бесплатном тире Netlify throttling может замедлять загрузку больших видео. Решение: загружать видео как blob через XHR/fetch, а не через `<video src>` — это позволяет скачать файл целиком и scrub работает без задержек.

## Cloudflare Pages

### Деплой
```bash
npm install -g wrangler
wrangler login
wrangler pages project create my-site
wrangler pages deploy . --project-name my-site
```

### Functions
Файлы в `functions/` автоматически становятся Workers. Формат:
```js
// functions/api/submit.js
export async function onRequestPost(context) {
  const body = await context.request.json();
  // ... отправка в Telegram
  return new Response(JSON.stringify({ ok: true }));
}
```

### ENV-переменные
```bash
wrangler pages secret put TELEGRAM_BOT_TOKEN
wrangler pages secret put TELEGRAM_CHAT_ID
```

## Vercel

### Деплой
```bash
npm install -g vercel
vercel login
vercel         # первый деплой
vercel --prod  # production
```

### Functions
Файлы в `api/` автоматически становятся функциями:
```js
// api/submit.js
export default async function handler(req, res) { ... }
```

## Домен

### Подключение кастомного домена
1. Купить домен (Reg.ru, Timeweb, Cloudflare Registrar)
2. На хостинге: Settings → Domains → Add custom domain
3. В DNS домена: добавить CNAME-запись на URL хостинга (или A-запись на IP)
4. SSL-сертификат — автоматически выпускается хостингом (Let's Encrypt)

### На что обратить внимание
- DNS-пропагация занимает до 48 часов (обычно 15-30 минут)
- Проверь что и www и без www работают (redirect или alias)
- HTTPS обязателен — все хостинги дают бесплатный SSL
