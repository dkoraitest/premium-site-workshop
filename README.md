# Premium Site Workshop

**Премиум-сайт за один спринт** — воркшоп по созданию production-ready сайтов с дорогими визуальными эффектами через vibe coding с Claude Code.

Автор: [AI Surfers](https://aisurfers.ru) (Дмитрий Коробовцев)

---

## Для кого этот репозиторий

- Участники воркшопа "Премиум-сайт за один спринт"
- Студенты буткемпа AI Surfers
- Все, кто хочет создавать premium-сайты через AI-кодинг

## Что внутри

### Типы сайтов (`types/`)

4 типа, каждый со своими промптами и reference-примерами:

| Тип | Механики | Бизнес |
|-----|----------|--------|
| [**video-hero**](types/video-hero/) | Scroll-scrub видео, grain, Lenis | Luxury, tech, недвижимость |
| [**saas-aurora**](types/saas-aurora/) | Mesh gradient, glass, bento grid | SaaS, AI, fintech |
| [**agency-kinetic**](types/agency-kinetic/) | Text reveal, custom cursor, marquee | Агентства, портфолио |
| [**product-scroll**](types/product-scroll/) | Horizontal pin, parallax, clip-path | Продукты, e-commerce |

### Production Pipeline (`pipeline/`)

8-этапный процесс от идеи до launch:

| # | Этап | Файл |
|---|------|------|
| 1 | Инфраструктура | [01-infrastructure.md](pipeline/01-infrastructure.md) |
| 2 | Бизнес-анализ | [02-business-analysis.md](pipeline/02-business-analysis.md) |
| 3 | ТЗ на сайт | [03-site-spec.md](pipeline/03-site-spec.md) |
| 4 | Реализация | [04-build.md](pipeline/04-build.md) |
| 5 | Контент | [05-content.md](pipeline/05-content.md) |
| 6 | Проверка (QA) | [06-qa-check.md](pipeline/06-qa-check.md) |
| 7 | Security + SEO + Legal | [07-security-seo.md](pipeline/07-security-seo.md) |
| 8 | Деплой + Аналитика | [08-deploy-analytics.md](pipeline/08-deploy-analytics.md) |

### Обвязка (`common/`)

Модули, применимые к любому типу сайта:

| Модуль | Что делает |
|--------|-----------|
| [seo.md](common/seo.md) | JSON-LD, OG, sitemap, robots, llms.txt |
| [analytics.md](common/analytics.md) | Яндекс.Метрика + GA4 + события |
| [forms-backend.md](common/forms-backend.md) | Лид-форма → serverless → Telegram |
| [legal.md](common/legal.md) | Privacy policy, cookie consent |
| [production.md](common/production.md) | Favicon, PWA, сжатие видео/изображений |
| [deploy.md](common/deploy.md) | Netlify, Cloudflare, Vercel + РФ-специфика |

### Чек-листы (`checklists/`)

| Чек-лист | Когда использовать |
|----------|-------------------|
| [security.md](checklists/security.md) | Перед публикацией |
| [before-launch.md](checklists/before-launch.md) | Финальная проверка всего |
| [deploy-ru.md](checklists/deploy-ru.md) | Деплой из России: что работает, workarounds |

### Справочники

| Файл | Содержание |
|------|-----------|
| [MECHANICS.md](MECHANICS.md) | Каталог 10 premium-эффектов с промптами |
| [TOOLS.md](TOOLS.md) | Claude Design vs Code, скиллы, библиотеки |
| [CLAUDE.md](CLAUDE.md) | Инструкции для Claude Code |

---

## Быстрый старт

### Шаг 0: Подготовка (5 мин)

```bash
# Склонировать репо
git clone https://github.com/dkoraitest/premium-site-workshop.git
cd premium-site-workshop

# Установить все skills одной командой
./setup.sh
```

### Шаг 1: Выбрать тип сайта

Открой `types/` и выбери подходящий для твоего бизнеса. Прочитай README внутри.

### Шаг 2: Сгенерировать визуал (если нужно)

Для video-hero: используй промпт из `types/video-hero/video-generation.md` в Kling или Runway.

### Шаг 3: Собрать сайт

Открой Claude Code в пустой папке и следуй промптам из выбранного типа.

### Шаг 4: Обвязка

Примени модули из `common/` в любом порядке:
1. `common/seo.md` — SEO-основа
2. `common/analytics.md` — Метрика + GA4
3. `common/forms-backend.md` — формы
4. `common/legal.md` — юридика
5. `common/production.md` — полировка

### Шаг 5: Деплой

Следуй `common/deploy.md`. Рекомендация для РФ: Cloudflare Pages.

### Шаг 6: Проверка

Пройди чек-листы:
1. `checklists/security.md`
2. `checklists/before-launch.md`

---

## Про Claude Design vs Claude Code

**Claude Design** — отличный инструмент для быстрого прототипа (30 секунд → лендинг). Но для production-сайта с кастомными эффектами (scroll-scrub видео, custom cursor, complex animations) нужен **Claude Code**.

Идеальный workflow: Claude Design → прототип → Export/Handoff → Claude Code → production.

Подробнее в [TOOLS.md](TOOLS.md).

---

## Лицензия

Промпты и материалы свободны для использования в обучении. Бренд AI Surfers и контент воркшопа — (c) AI Surfers 2026.
