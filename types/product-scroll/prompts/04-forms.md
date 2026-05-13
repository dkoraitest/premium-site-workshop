# Шаг 4: Форма обратной связи → Telegram

## Что делаем
Добавляем лид-форму, которая отправляет заявки в Telegram.

## Подготовка (5 мин)
1. Открой Telegram, найди @BotFather
2. Отправь /newbot → придумай имя → сохрани токен
3. Создай группу в Telegram, добавь туда бота
4. Получи chat_id: открой `https://api.telegram.org/bot{ТОКЕН}/getUpdates` после отправки сообщения в группу
5. Создай файл `.env` в корне проекта:
   ```
   TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
   TELEGRAM_CHAT_ID=-100123456789
   ```

## Промпт для Claude Code

> Добавь форму обратной связи с отправкой в Telegram:
> 1. HTML-форма в секции Contact: поля — имя (обязательное), телефон (обязательное), email (обязательное), комментарий (опционально). Красивая стилизация в стиле сайта.
> 2. Serverless function в api/submit.js (или netlify/functions/submit.js для Netlify):
>    - Проверка метода POST
>    - Валидация обязательных полей (name, phone, email)
>    - Escape HTML спецсимволов (< > &) для защиты от XSS
>    - POST запрос в Telegram Bot API: https://api.telegram.org/bot${TOKEN}/sendMessage
>    - Форматированное сообщение с parse_mode: 'HTML'
> 3. Клиентский JS: fetch POST на /api/submit, disabled кнопка при отправке, success/error сообщения.
> 4. Токены читать из process.env (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID).

## Важно
- `.env` уже в `.gitignore` — токены не попадут в git
- Полная спецификация: `common/forms-backend.md` в репо воркшопа

## Ожидаемый результат
Форма на сайте → при отправке сообщение приходит в Telegram-группу.
