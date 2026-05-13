# Этап 8: Деплой + Аналитика

Публикуем сайт и подключаем аналитику. Финальный этап.

---

## Деплой

### Промпт для Claude Code

> Подготовь проект к деплою на Cloudflare Pages:
> 1. Проверь что все пути к файлам относительные
> 2. Проверь что .env в .gitignore
> 3. Если есть serverless function: перенеси в functions/api/submit.js (формат Cloudflare Workers)
> 4. Создай git-репозиторий: git init, git add, git commit
> 5. Создай репозиторий на GitHub: gh repo create my-site --public --push

### Деплой вручную (2 мин)
1. dash.cloudflare.com → Pages → Create
2. Connect GitHub → выбери репозиторий
3. Build settings: оставь пустым (статический сайт)
4. Deploy → получи URL `my-site.pages.dev`
5. Settings → Environment variables → добавь TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

### Альтернатива
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

Подробнее: `common/deploy.md` | РФ-специфика: `checklists/deploy-ru.md`

---

## Формы → Telegram

Промпт из `types/{тип}/prompts/04-forms.md`:
1. Создай бота через @BotFather
2. Получи chat_id
3. Claude добавит форму + serverless function

---

## Аналитика

### Яндекс.Метрика (обязательно для РФ)

> Добавь счётчик Яндекс.Метрики. ID: [METRIKA_ID]. Код перед </head>. Включи: webvisor: true, clickmap: true, accurateTrackBounce: true. Добавь noscript-пиксель в body. Настрой цели: ym(ID, 'reachGoal', 'cta_click') на CTA, ym(ID, 'reachGoal', 'form_submit') на форму.

### Google Analytics 4

> Добавь GA4 через gtag.js. ID: [GA4_ID]. Код в head. Настрой события: cta_click, generate_lead. Скролл 50%/90% — через enhanced measurement.

### Важно
- Метрика обязательна для РФ — Яндекс учитывает поведенческие факторы
- Не загружай аналитику до cookie consent
- Проверь в Realtime: Метрика → «Проверка счётчика», GA4 → Realtime report

Подробнее: `common/analytics.md`

---

## Before-launch чек-лист

Финальная проверка: `checklists/before-launch.md`

---

## Ожидаемый результат

Сайт в интернете! Домен подключён, SSL работает, Метрика считает, формы отправляют в Telegram.
