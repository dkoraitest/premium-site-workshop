# Формы и бэкенд

Лид-форма → serverless function → Telegram бот. Без собственного сервера.

## Архитектура

```
[Форма на сайте] → POST /api/submit → [Serverless Function] → [Telegram Bot API] → [Чат/группа]
```

## Шаг 1: Создать Telegram бота

1. Написать @BotFather в Telegram → /newbot
2. Получить токен (TELEGRAM_BOT_TOKEN)
3. Добавить бота в группу или канал для уведомлений
4. Получить chat_id: отправить сообщение боту, открыть `https://api.telegram.org/bot{TOKEN}/getUpdates`

## Шаг 2: Промпт для Claude Code

> Создай лид-форму в модальном окне. Поля: ФИО (обязательное), компания, телефон (обязательное), email (обязательное), комментарий. Кнопка «Отправить заявку». После отправки — показать сообщение «Спасибо, мы свяжемся с вами».
>
> Бэкенд: создай serverless function в api/submit.js (Vercel) или netlify/functions/submit.js (Netlify). Функция принимает POST JSON, валидирует обязательные поля, экранирует HTML-спецсимволы (< > &), отправляет форматированное сообщение в Telegram через Bot API. Токен и chat_id — из env-переменных TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID.
>
> Обязательно: rate-limiting на клиенте (disable кнопку после отправки), валидация на сервере, экранирование XSS, обработка ошибок с человеко-читаемым сообщением.

## Шаг 3: ENV-переменные

В `.env` (локально):
```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

На хостинге: добавить те же переменные в настройках (Netlify → Site settings → Environment variables).

## На что обратить внимание
- `.env` обязательно в `.gitignore` — токен бота нельзя пушить
- Экранирование HTML: `<` → `&lt;`, `>` → `&gt;`, `&` → `&amp;` — иначе Telegram API вернёт ошибку
- Rate-limiting: минимум disable кнопки; для production — middleware с ограничением по IP
- Netlify: нужен redirect в netlify.toml (`/api/submit → /.netlify/functions/submit`)
- Vercel: функция в `api/submit.js` подхватывается автоматически
