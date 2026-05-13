# Инструменты для создания премиум-сайтов

## Claude Design vs Claude Code

| | Claude Design | Claude Code + taste-skill |
|---|---|---|
| **Скорость** | 30 секунд → лендинг | Минуты-часы |
| **Контроль** | Промпт + knobs (spacing, color, layout) | Полный (каждая строка кода) |
| **Кастомные эффекты** | Шаблонные parallax/3D | Любые (GSAP, Three.js, shaders) |
| **Production-ready** | Нет (прототип) | Да |
| **Бэкенд** | Нет | Да (serverless functions) |
| **SEO/аналитика** | Нет | Полный контроль |
| **Деплой** | Internal URL, PDF, PPTX, Canva | Любой хостинг |

### Когда что использовать

**Claude Design:**
- Быстрый драфт для клиента ("посмотри, мы думаем так")
- Прототипирование UI перед реализацией
- Презентации и pitch-деки
- Когда не нужен бэкенд и кастомные эффекты

**Claude Code:**
- Production-сайт с кастомными механиками
- Scroll-scrub видео, custom cursors, complex animations
- Serverless формы, API, интеграции
- SEO, аналитика, performance optimization

**Claude Design → Claude Code (workflow):**
1. Создай драфт в Claude Design (30 сек)
2. Export → Handoff to Claude Code
3. Claude Code получает бандл (дизайн-токены, структура, intent)
4. Доработка до production: кастомные эффекты, бэкенд, SEO, деплой

---

## Скиллы для качества UI

### taste-skill (17K stars)
Главный инструмент. 9 вариантов стиля + 3 image-gen скилла.

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

**Варианты:**
| Скилл | Install name | Когда использовать |
|-------|-------------|-------------------|
| taste-skill | `design-taste-frontend` | Универсальный — рекомендуется по умолчанию |
| soft-skill | `high-end-visual-design` | Luxury, premium, мягкий UI с глубиной |
| minimalist-skill | `minimalist-ui` | Notion/Linear стиль, editorial |
| brutalist-skill | `industrial-brutalist-ui` | Экспериментальный, Swiss type |
| redesign-skill | `redesign-existing-projects` | Улучшение существующего сайта |
| image-to-code-skill | `image-to-code` | Референс → анализ → код |

**Настройки** (числа 1-10 в начале файла):
- `DESIGN_VARIANCE` — экспериментальность layout (1=clean, 10=asymmetric)
- `MOTION_INTENSITY` — глубина анимаций (1=hover only, 10=scroll+magnetic)
- `VISUAL_DENSITY` — плотность информации (1=spacious, 10=dense)

### ui-ux-pro-max-skill (78K stars)
Reasoning-движок: анализирует проект и автогенерирует полную дизайн-систему (palette, typography, spacing).

```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
```

### awesome-design-md (77K stars)
Готовые DESIGN.md в стиле реальных брендов (BMW, Stripe, MongoDB, PostHog). Drop-in для coding agents.

```bash
# Скопируй нужный DESIGN.md в свой проект
gh repo clone VoltAgent/awesome-design-md
```

### frontend-design (Anthropic official)
Встроенный скилл Claude Code. 277K установок. Базовое качество "из коробки".

---

## Библиотеки компонентов (copy-paste)

| Библиотека | Stars | Описание | Стек |
|-----------|-------|---------|------|
| [react-bits](https://github.com/DavidHDev/react-bits) | 39K | 110+ анимированных компонентов | React |
| [Magic UI](https://magicui.design/) | 21K | Marquee, retro grids, neon gradients, dock | React + Tailwind + Motion |
| [Aceternity UI](https://ui.aceternity.com/) | 3.3K | 200+ эффектов: 3D cards, beams, particles | React + Next.js + Framer Motion |
| [motion-primitives](https://github.com/ibelick/motion-primitives) | 5.5K | UI kit для animated interfaces | React |
| [animata](https://github.com/codse/animata) | 2.6K | Hand-crafted анимации | React + Tailwind |

---

## Технический стек (core libraries)

| Библиотека | Назначение | Размер |
|-----------|-----------|--------|
| [GSAP](https://gsap.com/) | Анимации, ScrollTrigger, SplitText | 30KB |
| [Lenis](https://lenis.dev/) | Smooth scroll | 3KB |
| [Motion](https://motion.dev/) (ex Framer Motion) | React-анимации | 35KB |
| [Three.js](https://threejs.org/) | 3D/WebGL | 150KB |
| [Spline](https://spline.design/) | No-code 3D → embed | iframe |

---

## Генерация видео

### Kling (рекомендуется)
AI-генерация видео для hero-секций. Промпт для генерации — в `types/video-hero/video-generation.md`.

### Альтернативы
- **Runway Gen-3** — высокое качество, дороже
- **Pika** — быстрый, хорош для простых сцен
- **Sora** — OpenAI, ограниченный доступ

### Пост-обработка
```bash
# Сжатие для веба (8MB → 2MB)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1920:-2" -an -movflags +faststart output.mp4

# All-keyframes версия для scroll-scrub
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -g 1 -an -movflags +faststart scrub.mp4
```

---

## Awesome-листы (для самостоятельного изучения)

- [awesome-web-animation](https://github.com/sergey-pimenov/awesome-web-animation) — 10 категорий эффектов
- [awesome-web-effect](https://github.com/lindelof/awesome-web-effect) — compact cool effects
- [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — 59K stars, каталог скиллов
- [awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — 21K, кросс-агентный каталог
- [awesome-vibe-coding](https://github.com/filipecalegario/awesome-vibe-coding) — всё про vibe coding
- [easy-vibe](https://github.com/datawhalechina/easy-vibe) — полный курс vibe coding
