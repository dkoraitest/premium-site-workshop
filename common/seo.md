# SEO-обвязка

Модуль SEO для любого типа сайта. Скажи Claude Code выполнить каждый блок — или все сразу одним промптом.

## Что входит

### 1. Meta-теги и Open Graph
> Добавь полный набор мета-тегов: title (до 60 символов), description (до 160), canonical URL. Open Graph: og:title, og:description, og:image (абсолютный URL, 1200x630), og:url, og:type, og:locale. Twitter Card: summary_large_image. Убедись что og:image — абсолютный URL, не относительный.

### 2. JSON-LD Schema
> Добавь JSON-LD structured data в head. Минимум: Organization (name, url, logo, address, sameAs), WebSite, WebPage. Если есть события — Event с startDate, location, organizer. Если есть цены — Offer с price, priceCurrency. Если есть люди — Person с name, jobTitle, description. Все сущности связаны через @id.

### 3. sitemap.xml
> Создай sitemap.xml в корне проекта. Включи все публичные страницы с lastmod (сегодняшняя дата), changefreq, priority. Главная — priority 1.0. Остальные — 0.8. Privacy — 0.3.

### 4. robots.txt
> Создай robots.txt. Allow: / для всех ботов. Отдельно разреши: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Yandex. Укажи Sitemap: абсолютный URL на sitemap.xml.

### 5. llms.txt
> Создай llms.txt — инструкции для AI-краулеров. Опиши: что за сайт, что за бизнес, ключевые страницы, команда, контакты, предложения. Формат: markdown-like, краткий, фактический. Это помогает ChatGPT, Perplexity и Claude корректно цитировать сайт.

## На что обратить внимание
- og:image должен быть абсолютным URL и реально существующим файлом
- JSON-LD лучше проверить через Google Rich Results Test
- sitemap.xml должен быть доступен по URL из robots.txt
- llms.txt — относительно новый стандарт, но быстро набирает вес для AI-поиска
