# CLAUDE.md — Premium Site Workshop

## Что это

Стартер-кит для создания премиум-сайтов через vibe coding. Содержит промпты, механики, чек-листы и reference-код для воркшопа и буткемпа AI Surfers.

## Как использовать

Проект работает по 8-этапному pipeline (все материалы в `pipeline/`):

1. **Инфраструктура** — clone репо, установка skills (`./setup.sh`)
2. **Бизнес-анализ** — ЦА, боли, тип сайта (skills: /brainstorming → /grill-me)
3. **ТЗ на сайт** — структура, контент-план, стек (skill: /grill-me)
4. **Реализация** — сборка сайта по промптам из `types/{тип}/prompts/` + мульти-агенты
5. **Контент** — замена placeholder'ов на реальный
6. **QA** — проверка responsive, формы, кроссбраузерность (отдельная сессия)
7. **Security + SEO + Legal** — чек-листы, meta, privacy (отдельная сессия для security!)
8. **Деплой + Аналитика** — Cloudflare Pages, формы → Telegram, Метрика + GA4

## Рекомендуемые скиллы

### Приоритет (стек воркшопа)

```bash
# Официальный GSAP skill — правильный ScrollTrigger, timelines, performance
npx skills add greensock/gsap-skills

# taste-skill — anti-slop, premium UI
npx skills add https://github.com/Leonxlnx/taste-skill
```

Скилл orchestrating-gsap-lenis (решает конфликт ScrollTrigger + Lenis): [skills.rest](https://skills.rest/skill/orchestrating-gsap-lenis)

### taste-skill варианты
- `--skill "design-taste-frontend"` — универсальный (рекомендуется)
- `--skill "high-end-visual-design"` — мягкий, дорогой UI
- `--skill "minimalist-ui"` — Notion/Linear стиль
- `--skill "industrial-brutalist-ui"` — жёсткий, экспериментальный

### Планирование
- `npx skills add mattpocock/skills --skill "grill-me"` — stress-test плана (допрос по каждой ветке решений)

### Дополнительные
- `npx skills add freshtechbro/claudedesignskills` — 27 плагинов для визуальных эффектов
- `npx skills add nextlevelbuilder/ui-ux-pro-max-skill` — auto-дизайн-система

Полный список: `resources/links.md`

## Конвенции

- **Язык:** русский для клиентского контента
- **Стек:** на выбор участника. GSAP + Lenis для анимаций. Vanilla HTML/CSS/JS, React, Next.js, Tailwind — что удобнее
- **Видео:** генерация через Kling или аналоги → сжатие через ffmpeg → blob-loading на сайте
- **Деплой:** Netlify (основной), Cloudflare Pages (РФ-friendly), Vercel (если доступен)
- **Формы:** serverless function → Telegram бот
- **SEO:** JSON-LD schema, OG/Twitter cards, sitemap.xml, robots.txt, llms.txt

## Мульти-агентная система

В `.claude/agents/` лежат 3 агента для проверки качества во время сборки (этап 4):

| Агент | Что делает | Когда |
|-------|-----------|-------|
| `design-reviewer` | Скриншот + визуал (типографика, spacing, premium) | После каждого checkpoint |
| `code-reviewer` | Код (GSAP usage, performance, accessibility) | После CP2, CP3 |
| `responsive-checker` | Mobile 375px, tablet 768px, desktop 1440px | После CP2, CP3 |

Цикл: написал код → checkpoint → запустил агентов → исправил FAIL → дальше.

Для QA (этап 6) и Security (этап 7) — открывай **отдельные сессии** Claude Code.

## Структура проекта

```
pipeline/           — 8-этапный production pipeline (от идеи до launch)
types/              — 4 типа сайтов с промптами (01-site → 05-deploy)
.claude/agents/     — мульти-агенты (design, code, responsive)
common/             — SEO, аналитика, формы, legal, deploy
checklists/         — security, before-launch, deploy-ru
checkpoints/        — CP1 (hero), CP2 (секции), CP3 (эффекты)
resources/          — showcase примеров + полезные ссылки
setup.sh            — установка всех skills одной командой
MECHANICS.md        — каталог 10 premium-эффектов
TOOLS.md            — обзор инструментов и библиотек
```
