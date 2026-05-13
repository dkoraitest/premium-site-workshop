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

### Мульти-агенты (`.claude/agents/`)

3 агента для проверки качества во время сборки сайта:

| Агент | Что проверяет |
|-------|--------------|
| `design-reviewer` | Визуал: типографика, spacing, цвета, premium-ощущение |
| `code-reviewer` | Код: GSAP usage, performance, accessibility |
| `responsive-checker` | Responsive: mobile 375px, tablet 768px, desktop 1440px |

### Checkpoints (`checkpoints/`)

| Checkpoint | Когда |
|-----------|-------|
| [cp1-hero.md](checkpoints/cp1-hero.md) | Hero на весь экран, CTA видна |
| [cp2-sections.md](checkpoints/cp2-sections.md) | Все секции, responsive, навигация |
| [cp3-effects.md](checkpoints/cp3-effects.md) | Эффекты работают, анимации плавные |

### Справочники

| Файл | Содержание |
|------|-----------|
| [MECHANICS.md](MECHANICS.md) | Каталог 10 premium-эффектов с промптами |
| [TOOLS.md](TOOLS.md) | Claude Design vs Code, скиллы, библиотеки |
| [CLAUDE.md](CLAUDE.md) | Инструкции для Claude Code |

---

## Быстрый старт

### 1. Инфраструктура

```bash
git clone https://github.com/dkoraitest/premium-site-workshop.git
cd premium-site-workshop
./setup.sh          # установит gsap-skills, taste-skill, grill-me
mkdir my-site && cd my-site
```

### 2. Бизнес-анализ

Открой Claude Code и используй промпт из `pipeline/02-business-analysis.md`. Skills: `/brainstorming` → `/grill-me`.

### 3. ТЗ на сайт

Промпт из `pipeline/03-site-spec.md`. Прожарь через `/grill-me`.

### 4. Реализация

Выбери тип из `types/` → копируй промпты `01-site.md`, `02-effects.md`. На каждом checkpoint запускай агентов из `.claude/agents/` (design-reviewer, code-reviewer, responsive-checker).

### 5. Контент

Промпт из `pipeline/05-content.md` — замена placeholder'ов.

### 6. QA (отдельная сессия)

Промпт из `pipeline/06-qa-check.md` — 50+ проверок.

### 7. Security + SEO + Legal (отдельная сессия для security!)

SEO: `types/{тип}/prompts/03-seo.md`. Security: `checklists/security.md`. Legal: `common/legal.md`.

### 8. Деплой + Аналитика

Формы: `types/{тип}/prompts/04-forms.md`. Деплой: `types/{тип}/prompts/05-deploy.md`. Аналитика: `pipeline/08-deploy-analytics.md`.

---

## Про Claude Design vs Claude Code

**Claude Design** — отличный инструмент для быстрого прототипа (30 секунд → лендинг). Но для production-сайта с кастомными эффектами (scroll-scrub видео, custom cursor, complex animations) нужен **Claude Code**.

Идеальный workflow: Claude Design → прототип → Export/Handoff → Claude Code → production.

Подробнее в [TOOLS.md](TOOLS.md).

---

## Лицензия

Промпты и материалы свободны для использования в обучении. Бренд AI Surfers и контент воркшопа — (c) AI Surfers 2026.
