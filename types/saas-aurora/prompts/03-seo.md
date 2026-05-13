# Шаг 3: SEO-обвязка

## Что делаем
Добавляем мета-теги, JSON-LD, Open Graph, sitemap, robots.txt, llms.txt.

## Промпт для Claude Code

> Добавь SEO-обвязку для сайта:
> 1. Meta: title (до 60 символов), description (до 160), canonical URL
> 2. Open Graph: og:title, og:description, og:image (1200x630, абсолютный URL), og:url, og:type website, og:locale ru_RU
> 3. Twitter Card: twitter:card summary_large_image, twitter:title, twitter:description, twitter:image
> 4. JSON-LD schema: Organization (name, url, logo) + WebSite (name, url) + WebPage (name, description, url). Связь через @id.
> 5. Создай sitemap.xml со всеми публичными страницами (lastmod сегодняшняя дата)
> 6. Создай robots.txt: User-agent: *, Allow: /. Отдельно разреши GPTBot, ClaudeBot, PerplexityBot. Укажи Sitemap.
> 7. Создай llms.txt с описанием сайта в markdown-формате для AI-краулеров.

## Важно
- og:image должен быть **абсолютный URL** и файл должен существовать
- Полная спецификация: `common/seo.md` в репо воркшопа

## Ожидаемый результат
Мета-теги в head, JSON-LD script, sitemap.xml, robots.txt, llms.txt в корне сайта.
