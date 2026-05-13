# Полезные ссылки

Быстрый доступ к инструментам для воркшопа.

---

## Skills: анимации и стек (приоритет для воркшопа)

| Скилл | Установка | Для чего |
|-------|-----------|----------|
| **gsap-skills** (официальный GreenSock) | `npx skills add greensock/gsap-skills` | Правильный GSAP: core API, timelines, ScrollTrigger, плагины, performance |
| **orchestrating-gsap-lenis** | [skills.rest](https://skills.rest/skill/orchestrating-gsap-lenis) | Решает конфликт ScrollTrigger + Lenis (autoRaf, тикер, stuttering) |
| **claudedesignskills** (27 плагинов) | `npx skills add freshtechbro/claudedesignskills` | GSAP-ScrollTrigger, Locomotive, Barba, PixiJS, Lottie и др. |
| **css-animation-skill** | `npx skills add neonwatty/css-animation-skill` | Чистые CSS-анимации без библиотек |

## Skills: планирование и анализ

| Скилл | Установка | Для чего |
|-------|-----------|----------|
| **grill-me** (Matt Pocock) | `npx skills add mattpocock/skills --skill "grill-me"` | Stress-test плана: допрашивает по каждой ветке решений, находит пробелы |

Рекомендуемый flow: brainstorming (генерация идей) → grill-me (прожарка плана) → реализация.

## Skills: качество UI и дизайн

| Скилл | Установка | Для чего |
|-------|-----------|----------|
| taste-skill (рекомендуется) | `npx skills add https://github.com/Leonxlnx/taste-skill` | Anti-slop, premium UI, настраиваемые параметры |
| Мягкий luxury UI | `npx skills add https://github.com/Leonxlnx/taste-skill --skill "high-end-visual-design"` | Luxury, мягкий, глубокий |
| Минимализм | `npx skills add https://github.com/Leonxlnx/taste-skill --skill "minimalist-ui"` | Notion/Linear стиль |
| Брутализм | `npx skills add https://github.com/Leonxlnx/taste-skill --skill "industrial-brutalist-ui"` | Экспериментальный |
| ui-ux-pro-max | `npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` | Auto-дизайн-система |
| claude-frontend-skills | [GitHub](https://github.com/Koomook/claude-frontend-skills) | Антишаблон — уводит Claude от дефолтных решений |

## MCP-серверы (для Claude Code)

| Сервер | Установка | Для чего |
|--------|-----------|----------|
| **Chrome DevTools MCP** | `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest` | Скриншоты, DOM, Lighthouse прямо из Claude Code |
| **Lighthouse MCP** | `npx @anthropic-ai/claude-code mcp add lighthouse -- npx lighthouse-mcp` | Performance, a11y, SEO scoring |

## DESIGN.md коллекции (drop-in дизайн-системы)

| Коллекция | Что внутри | Ссылка |
|-----------|-----------|--------|
| awesome-design-md (VoltAgent) | 55+ DESIGN.md в стиле Stripe, Linear, BMW | [GitHub](https://github.com/VoltAgent/awesome-design-md) |
| awesome-design-skills (bergside) | 67 DESIGN.md + SKILL.md файлов | [GitHub](https://github.com/bergside/awesome-design-skills) |
| Frontend Design Toolkit | 240+ стилей, 127 шрифтовых пар, 99 UX guidelines | [GitHub](https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit) |

## Библиотеки (core)

| Библиотека | CDN | Зачем |
|-----------|-----|-------|
| GSAP | `https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js` | Анимации, ScrollTrigger |
| ScrollTrigger | `https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js` | Scroll-driven анимации |
| SplitText | `https://cdn.jsdelivr.net/npm/gsap@3/dist/SplitText.min.js` | Разбивка текста (text reveal) |
| Lenis | `https://cdn.jsdelivr.net/npm/lenis@latest/dist/lenis.min.js` | Smooth scroll |
| SplitType | `https://cdn.jsdelivr.net/npm/split-type@latest` | Альтернатива SplitText (open-source) |

## Компоненты (copy-paste)

- [react-bits](https://github.com/DavidHDev/react-bits) — 110+ анимированных компонентов (React)
- [Magic UI](https://magicui.design/) — marquee, retro grids, neon gradients (React + Tailwind)
- [Aceternity UI](https://ui.aceternity.com/) — 200+ эффектов: 3D cards, beams, particles
- [motion-primitives](https://github.com/ibelick/motion-primitives) — UI kit для animated interfaces
- [animata](https://github.com/codse/animata) — hand-crafted анимации

## ffmpeg-команды

```bash
# Сжатие hero-видео для автоплея (~2MB)
ffmpeg -i raw.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1920:-2" -an -movflags +faststart hero.mp4

# All-keyframes для scroll-scrub (обязательно -g 1!)
ffmpeg -i raw.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -g 1 -an -movflags +faststart scrub.mp4

# Poster-кадр
ffmpeg -i hero.mp4 -vf "select=eq(n\,0)" -q:v 2 poster.jpg

# Конвертация в WebP (изображения)
cwebp -q 80 input.jpg -o output.webp
```

## Awesome-листы

- [awesome-web-animation](https://github.com/sergey-pimenov/awesome-web-animation) — 10 категорий эффектов
- [awesome-web-effect](https://github.com/lindelof/awesome-web-effect) — compact cool effects
- [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — каталог скиллов
- [awesome-vibe-coding](https://github.com/filipecalegario/awesome-vibe-coding) — всё про vibe coding

## Design-референсы

- [bentogrids.com](https://bentogrids.com) — галерея bento grid дизайнов
- [scroll-driven-animations.style](https://scroll-driven-animations.style) — демо CSS scroll animations
- [Awwwards](https://www.awwwards.com) — лучшие сайты мира
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — готовые DESIGN.md (BMW, Stripe, MongoDB)
