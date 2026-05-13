# Этап 3: Инфраструктура разработки

Настройка рабочей среды перед тем, как начать строить сайт. Скиллы, агенты, репозиторий, инструменты обратной связи.

---

## Шаг 1: Создать проект

```bash
# Создай папку проекта
mkdir my-premium-site && cd my-premium-site

# Git
git init
echo ".env*" >> .gitignore
echo "node_modules/" >> .gitignore
echo ".DS_Store" >> .gitignore
git add .gitignore && git commit -m "init: gitignore"
```

---

## Шаг 2: Установить скиллы Claude Code

### Обязательные

```bash
# GSAP — правильный ScrollTrigger, timelines, performance patterns
npx skills add greensock/gsap-skills

# taste-skill — anti-slop, premium UI, правильная типографика и spacing
npx skills add https://github.com/Leonxlnx/taste-skill
```

### Рекомендуемые

```bash
# orchestrating-gsap-lenis — решает конфликт ScrollTrigger + Lenis
# (вручную: открой skills.rest, найди orchestrating-gsap-lenis, установи)

# ui-ux-pro-max — auto-генерация дизайн-системы (палитра, типографика, spacing)
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
```

### Опциональные

```bash
# Библиотека визуальных плагинов (27 штук)
npx skills add freshtechbro/claudedesignskills
```

### Какой вариант taste-skill выбрать

| Скилл | Когда использовать |
|---|---|
| `design-taste-frontend` | По умолчанию. Универсальный premium UI |
| `high-end-visual-design` | Luxury, мягкий, «дорогой» UI |
| `minimalist-ui` | Стиль Notion / Linear — чисто, просто |
| `industrial-brutalist-ui` | Экспериментальный, жёсткий, Swiss type |

---

## Шаг 3: DESIGN.md (опционально)

Если хочешь задать дизайн-систему до начала кодинга:

```bash
# Клонируй коллекцию готовых DESIGN.md
gh repo clone VoltAgent/awesome-design-md

# Скопируй подходящий в свой проект
cp awesome-design-md/designs/stripe-inspired.md ./DESIGN.md

# Или сгенерируй свой — используй промпт из этапа 02 (секция "Если нужен DESIGN.md")
```

DESIGN.md задаёт CSS-переменные, типографику, spacing, компоненты. Claude Code подхватывает его автоматически и следует дизайн-системе при генерации кода.

---

## Шаг 4: ENV-файл

```bash
# Создай .env для секретов (токены, ключи)
touch .env

# Типичное содержимое:
# TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
# TELEGRAM_CHAT_ID=-100123456789
```

Убедись, что `.env*` в `.gitignore`. Никогда не коммить токены.

---

## Шаг 5: Мульти-агентный подход

Премиум-сайт — это не только код. Для качественного результата используй отдельных агентов на разные задачи. Каждый агент работает в своей сессии Claude Code — это изолирует контекст и предотвращает bias (когда тот, кто писал код, проверяет сам себя).

### Когда какой агент

| Агент | Когда запускать | Что делает |
|---|---|---|
| **Main (строитель)** | Этапы 04-05 | Пишет HTML/CSS/JS, собирает секции, подключает эффекты |
| **SEO** | После этапа 04 | Проверяет мета-теги, JSON-LD, sitemap, контент |
| **QA** | После этапа 04-05 | Responsive, accessibility, cross-browser, производительность |
| **Security** | Перед деплоем | Ищет утечки секретов, XSS, проблемы с зависимостями |
| **Code Review** | После каждого крупного этапа | Качество кода, дублирование, performance anti-patterns |

### Как запускать

**Main-агент** — основная сессия Claude Code. Здесь строишь сайт.

**SEO-агент** — новая сессия:
```
# Открой новый терминал / новую сессию Claude Code в той же папке
# Промпт:

Проведи SEO-аудит этого сайта. Используй скилл seo.
Проверь: мета-теги, JSON-LD schema, Open Graph, sitemap.xml, robots.txt, llms.txt.
Контент: уникальность, E-E-A-T, читаемость.
Результат запиши в AUDIT_SEO.md.
```

**QA-агент** — новая сессия:
```
Проведи QA-проверку сайта. Открой index.html.
Проверь: responsive (375px, 768px, 1440px), все ссылки, все изображения,
формы (submit + валидация), анимации (нет jank), навигация (якорные ссылки).
Нет горизонтального скролла на мобильных. Нет lorem ipsum.
Результат запиши в AUDIT_QA.md.
```

**Security-агент** — новая сессия (обязательно отдельная от dev-сессии):
```
Проведи security-аудит проекта. Используй скилл security-audit.
Проверь: .env в .gitignore, нет hardcoded токенов, XSS-экранирование в формах,
внешние зависимости с конкретными версиями, HTTPS, security headers.
Результат запиши в AUDIT_SECURITY.md.
```

**Code Review-агент** — новая сессия:
```
Проведи code review проекта. Обрати внимание на:
- Дублирование кода (DRY)
- Performance: lazy loading, оптимизация изображений, bundle size
- Accessibility: alt-тексты, ARIA, фокус, контраст
- Чистота: нет console.log, нет закомментированного кода, нет TODO
- Семантика: правильные HTML-теги (section, article, nav, main, header, footer)
Результат запиши в AUDIT_CODE.md.
```

### Почему отдельные сессии

1. **Изоляция контекста.** Агент, который построил сайт, склонен пропускать свои ошибки. Свежий агент видит проблемы, которые "строитель" не замечает.
2. **Параллельность.** SEO, QA и Security можно запустить одновременно в разных терминалах.
3. **Специализация.** Каждый агент загружает свой скилл и фокусируется на одной задаче.

---

## Шаг 6: Chrome DevTools MCP (опционально)

Для визуальной обратной связи — Claude Code видит, как сайт выглядит в браузере.

```bash
# Установи Chrome DevTools MCP (если ещё нет)
# Позволяет Claude Code делать скриншоты, проверять responsive, видеть ошибки консоли

# Добавь в .claude/settings.json проекта:
# "mcpServers": {
#   "chrome-devtools": {
#     "command": "npx",
#     "args": ["@anthropic/chrome-devtools-mcp"]
#   }
# }
```

С Chrome DevTools MCP агент может:
- Сделать скриншот страницы и увидеть результат
- Проверить responsive на разных размерах экрана
- Увидеть ошибки в консоли браузера
- Инспектировать DOM и стили

---

## Шаг 7: Структура проекта

К этому моменту должна быть готова такая структура:

```
my-premium-site/
  .gitignore          # .env*, node_modules/, .DS_Store
  .env                # TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
  BUSINESS_ANALYSIS.md  # Из этапа 01
  SITE_SPEC.md          # Из этапа 02
  DESIGN.md             # Опционально — дизайн-система
```

Скиллы установлены, агенты понятны, ENV готов. Можно строить.

---

## Чеклист готовности

- [ ] Папка проекта создана, git init выполнен
- [ ] `.env` создан, `.env*` в `.gitignore`
- [ ] gsap-skills установлен
- [ ] taste-skill установлен (выбран подходящий вариант)
- [ ] BUSINESS_ANALYSIS.md готов (из этапа 01)
- [ ] SITE_SPEC.md готов (из этапа 02)
- [ ] DESIGN.md создан (опционально)
- [ ] Понятно, как запускать SEO / QA / Security агентов
