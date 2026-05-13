# CLAUDE.md — Premium Site Workshop

## Что это

Стартер-кит для создания премиум-сайтов через vibe coding. Содержит промпты, механики, чек-листы и reference-код для воркшопа и буткемпа AI Surfers.

## Как использовать

1. Выбери тип сайта из `types/` под свой бизнес
2. Следуй промптам из папки выбранного типа
3. Примени нужные модули из `common/` (SEO, аналитика, формы, деплой)
4. Проверь по чек-листам из `checklists/` перед запуском

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

## Порядок работы (workshop flow)

```
1. Выбрать тип сайта → types/{type}/
2. Сгенерировать видео/визуал (если нужно) → types/{type}/video-generation.md
3. Собрать сайт → types/{type}/*.md промпты
4. Обвязка → common/ (в любом порядке)
   - common/seo.md
   - common/analytics.md
   - common/forms-backend.md
   - common/legal.md
   - common/production.md
5. Деплой → common/deploy.md
6. Проверка → checklists/before-launch.md + checklists/security.md
```

## Полезные ресурсы

- `MECHANICS.md` — каталог 10 premium-эффектов с описанием и промптами
- `TOOLS.md` — сравнение Claude Design vs Claude Code, обзор скиллов и библиотек
- `resources/` — ссылки на GitHub-репозитории, awesome-листы, библиотеки компонентов
