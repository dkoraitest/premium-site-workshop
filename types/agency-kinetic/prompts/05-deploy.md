# Шаг 5: Деплой

## Что делаем
Публикуем сайт в интернет.

## Рекомендация: Cloudflare Pages
Лучший вариант для РФ: безлимитный bandwidth, CDN-ноды в Москве и Петербурге, бесплатный SSL.

## Промпт для Claude Code

> Подготовь проект к деплою на Cloudflare Pages:
> 1. Проверь что все пути к файлам относительные (не абсолютные)
> 2. Проверь что .env в .gitignore
> 3. Если есть serverless function: перенеси в functions/api/submit.js (формат Cloudflare Workers)
> 4. Создай git-репозиторий если ещё нет: git init, git add, git commit
> 5. Создай репозиторий на GitHub: gh repo create my-site --public --push

## Деплой вручную (2 мин)
1. Зайди на dash.cloudflare.com → Pages → Create
2. Connect GitHub → выбери репозиторий
3. Build settings: оставь пустым (статический сайт)
4. Deploy → получи URL вида `my-site.pages.dev`
5. Добавь env vars: Settings → Environment variables → TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

## Альтернатива: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

## Ожидаемый результат
Сайт доступен по публичному URL. Форма работает (env vars настроены на хостинге).
