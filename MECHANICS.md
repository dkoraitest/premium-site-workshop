# Каталог премиальных визуальных механик

10 эффектов, которые превращают обычный сайт в premium. Для каждого — описание, бизнес-кейс, технический стек, уровень сложности и промпт для реализации через Claude Code.

---

## Сводная таблица

| # | Механика | Сложность | Стек | Лучше для |
|---|---------|-----------|------|-----------|
| 1 | Scroll-Driven Animations | Простой CSS | Нативный CSS / GSAP fallback | Универсально |
| 2 | Staggered Text Reveal | Средний JS | GSAP SplitText, SplitType | Агентства, luxury, портфолио |
| 3 | Smooth Scroll + Horizontal Pin | Средний JS | Lenis + GSAP ScrollTrigger | Продукты, недвижимость, кейсы |
| 4 | Mesh Gradient / Aurora + Glass | Простой CSS | Чистый CSS | SaaS, AI, fintech |
| 5 | Custom Cursor + Magnetic Buttons | Средний JS | GSAP quickTo / Cuberto | Агентства, luxury, fashion |
| 6 | Bento Grid | Простой-средний | CSS Grid + IntersectionObserver | SaaS, edtech, корпоративные |
| 7 | Clip-Path Reveal | Простой-средний | CSS clip-path + GSAP | Архитектура, фото, fashion |
| 8 | View Transitions API | Простой CSS | Нативный браузерный API | E-commerce, каталоги, блоги |
| 9 | Spline 3D Objects | Средний | Spline / React Three Fiber | Продукты, SaaS, edtech |
| 10 | Marquee Text Band | Простой CSS | CSS / Lenis / GSAP | Агентства, fashion, events |

---

## 1. Scroll-Driven Animations

**Что это.** Анимации, привязанные к позиции скролла. CSS `scroll()` и `view()` позволяют запускать анимацию при появлении элемента в viewport. Полностью аппаратно-ускоренные, без JS на main thread.

**Для кого.** Универсально — любой тип сайта. Особенно эффективна для лендингов, storytelling, продуктовых презентаций.

**Стек.** Чистый CSS: `animation-timeline: scroll()` / `view()`. Fallback: GSAP ScrollTrigger.

**Сложность.** Простой CSS. Поддержка во всех основных браузерах в 2026.

**Примеры.** scroll-driven-animations.style — справочник с демо.

**Промпт для Claude Code:**
> Добавь scroll-driven анимации для всех карточек и секций. Используй нативный CSS animation-timeline: view() с IntersectionObserver fallback для старых браузеров. Карточки должны появляться с fade-in + translateY(20px) при входе в viewport. Секции — с плавным opacity transition.

---

## 2. Staggered Text Reveal

**Что это.** Текст разбивается на символы/слова/строки, каждый элемент анимируется отдельно с задержкой (stagger). Hero-заголовки, раскрытие при скролле, 3D-вращение символов.

**Для кого.** Креативные агентства, портфолио, luxury-бренды, продуктовые лендинги.

**Стек.** GSAP SplitText (бесплатен с 2024), SplitType (open-source), Motion.dev.

**Сложность.** Средний JS — подключение библиотеки + настройка timeline.

**Примеры.** motto.is, Sundae Creative.

**Промпт для Claude Code:**
> Добавь staggered text reveal для hero-заголовка. Разбей текст на слова через SplitType или GSAP SplitText. Каждое слово появляется с translateY(100%) из overflow:hidden контейнера, stagger 0.05s, ease power4.out. Запуск по ScrollTrigger при входе в viewport. На мобильных — упрощённый fade-in без разбивки.

---

## 3. Smooth Scroll + Horizontal Pinned Section

**Что это.** (а) Lenis даёт «маслянистый» инерционный скролл; (б) секция прибивается к экрану, контент внутри прокручивается горизонтально при вертикальном скролле.

**Для кого.** Продуктовые лендинги (электроника, авто, недвижимость), портфолио, презентации кейсов.

**Стек.** Lenis (3 KB) + GSAP ScrollTrigger `pin: true`.

**Сложность.** Средний JS — Lenis 5 строк, pinned-секция 20-30 строк GSAP.

**Примеры.** lenis.dev, сайт Lando Norris (Awwwards Site of the Year 2025).

**Промпт для Claude Code:**
> Подключи Lenis для smooth scroll на весь сайт. Добавь горизонтальную pinned-секцию для раздела «кейсы» или «портфолио»: при вертикальном скролле секция прибивается к экрану, а карточки внутри прокручиваются горизонтально. Используй GSAP ScrollTrigger с pin:true. На мобильных — обычный вертикальный скролл карточек.

---

## 4. Mesh Gradient / Aurora + Glassmorphism

**Что это.** Многоцветный органический фон (северное сияние). Несколько radial-gradient с анимированным background-position. Поверх — стеклянные карточки с backdrop-filter: blur.

**Для кого.** SaaS, AI-продукты, fintech, стартапы. Стиль Linear, Vercel, Stripe.

**Стек.** Чистый CSS — 10-20 строк. Zero JS.

**Сложность.** Простой CSS.

**Примеры.** linear.app, vercel.com, stripe.com.

**Промпт для Claude Code:**
> Сделай hero-секцию с animated mesh gradient фоном (aurora-эффект). Используй 3-4 radial-gradient разных цветов с @keyframes, анимирующими background-position по кругу. Цветовую палитру возьми из бренда сайта. Поверх — glassmorphism-карточки: background rgba(255,255,255,0.1), backdrop-filter blur(20px), border 1px solid rgba(255,255,255,0.2). Анимация фона должна быть медленной и плавной (20-30s цикл).

---

## 5. Custom Cursor + Magnetic Buttons

**Что это.** Кастомный курсор (dot/circle/blob), который следует за мышью с задержкой, меняет форму при hover, притягивает кнопки к себе. Mix-blend-mode: exclusion для инверсии.

**Для кого.** Креативные агентства, портфолио дизайнеров, luxury, fashion.

**Стек.** Cuberto Mouse Follower или GSAP quickTo(). CSS mix-blend-mode.

**Сложность.** Средний JS — cursor follower 30-50 строк, magnetic ещё 20.

**Примеры.** cuberto.com, obys.agency.

**Промпт для Claude Code:**
> Добавь кастомный курсор: маленький круг (8px) + большой круг-follower (40px) который следует за мышью с задержкой через GSAP quickTo или lerp. При наведении на кнопки и ссылки follower увеличивается до 60px и становится полупрозрачным. Добавь magnetic-эффект для CTA-кнопок: кнопка сдвигается к курсору на 15-20px при приближении. На тач-устройствах — скрыть кастомный курсор полностью.

---

## 6. Bento Grid

**Что это.** Модульная сетка из асимметричных карточек разных размеров (стиль японского бенто). Stagger-анимация при скролле, hover с поднятием.

**Для кого.** SaaS (раздел features), дашборды, edtech, корпоративные сайты.

**Стек.** CSS Grid + IntersectionObserver или GSAP ScrollTrigger.

**Сложность.** Простой-средний.

**Примеры.** Apple WWDC, GitHub, linear.app. Галерея: bentogrids.com.

**Промпт для Claude Code:**
> Собери секцию features в виде bento grid: 2-3 колонки, карточки разных размеров (некоторые span 2 колонки или 2 ряда). CSS Grid с grid-template-columns: repeat(3, 1fr). Каждая карточка — border-radius 16px, padding 32px, subtle background. При hover: scale(1.02) translateY(-4px) + усиление тени. Появление при скролле — stagger fade-in через IntersectionObserver. На мобильных — одна колонка.

---

## 7. Clip-Path Reveal

**Что это.** Элемент «вскрывается» через анимацию CSS clip-path — круг расширяется из центра, прямоугольник раздвигается, полигон морфится. Особенно эффектно при scroll-trigger.

**Для кого.** Архитектура, недвижимость, фотография, fashion, luxury.

**Стек.** CSS clip-path + GSAP для сложных форм.

**Сложность.** Простой-средний CSS.

**Примеры.** Lightship, Accordion (Awwwards).

**Промпт для Claude Code:**
> Добавь clip-path reveal для изображений в секции «галерея» или «проекты». При скролле в viewport изображение открывается через clip-path: circle() — начинает с circle(0% at 50% 50%), раскрывается до circle(100% at 50% 50%). Используй CSS transition или GSAP ScrollTrigger для привязки к скроллу. Для второго изображения — inset() reveal слева направо. Длительность раскрытия 0.8-1.2s, ease power2.inOut.

---

## 8. View Transitions API

**Что это.** Нативный браузерный API для плавных переходов между страницами. Элемент на одной странице трансформируется в элемент на другой (карточка → страница товара). Ощущение нативного приложения.

**Для кого.** E-commerce, каталоги, портфолио, блоги — любые multi-page сайты.

**Стек.** CSS: `view-transition-name` + `@view-transition { navigation: auto; }`. 5-10 строк.

**Сложность.** Простой CSS.

**Примеры.** Chrome for Developers demo, Piccalilli.

**Промпт для Claude Code:**
> Добавь View Transitions API для переходов между страницами. На карточках товаров/проектов задай view-transition-name уникальный для каждого элемента. В CSS добавь @view-transition { navigation: auto; } и стили для ::view-transition-old/new. Переход: crossfade 0.3s для фона, morph для карточки в hero-изображение на странице деталей. Fallback для браузеров без поддержки — обычная навигация.

---

## 9. Spline 3D Objects

**Что это.** Интерактивные 3D-объекты на странице: продукт вращается при наведении, сцена реагирует на скролл. Spline — no-code 3D-редактор с экспортом в iframe/React.

**Для кого.** Продуктовые лендинги (электроника, обувь, косметика), SaaS, edtech.

**Стек.** Spline (визуальный редактор) → embed iframe или @splinetool/react-spline.

**Сложность.** Средний — нужно заранее создать сцену в Spline, встраивание простое.

**Примеры.** Brew District 24, Beeble.ai.

**Промпт для Claude Code:**
> Встрой Spline 3D-сцену в hero-секцию. URL сцены: [SPLINE_URL]. Используй iframe с loading="lazy". Оберни в контейнер с aspect-ratio 16/9. Позиционируй как фон hero-секции с position: absolute, z-index: 0, текстовый контент поверх. На мобильных с шириной < 768px замени на статичное изображение (3D тяжелый для мобильных GPU). Добавь skeleton-loader пока сцена грузится.

---

## 10. Marquee Text Band

**Что это.** Бесконечно прокручивающаяся полоса текста (крупная типографика) между секциями. Может двигаться в противоположную сторону от скролла. Самый простой из premium-приёмов.

**Для кого.** Агентства, студии, fashion, event-лендинги, креативные продукты.

**Стек.** CSS @keyframes или GSAP. С Lenis — привязка скорости к scroll velocity.

**Сложность.** Простой CSS — 5 строк для базового, 15 строк JS для velocity-linked.

**Примеры.** OFF+BRAND, большинство агентских портфолио на Awwwards.

**Промпт для Claude Code:**
> Добавь marquee текстовую полосу между секциями hero и features. Крупный текст (48-72px), uppercase, font-weight 700, в одну строку. Дублируй текст 3-4 раза для бесшовного цикла. CSS animation: translateX(0) → translateX(-50%) infinite linear 20s. При наличии Lenis — привяжи скорость marquee к scroll velocity (быстрее скролл = быстрее бегущая строка). Второй marquee ниже — в обратную сторону, другим цветом или stroke вместо fill.

---

## Комбинации для типов сайтов

| Тип | Основные механики | Дополнительные |
|-----|-------------------|----------------|
| **Video Hero** (luxury, tech) | Scroll-scrub видео + Smooth Scroll + Grain overlay | Text Reveal, Clip-Path |
| **SaaS Aurora** (SaaS, AI) | Mesh Gradient + Bento Grid + Scroll Animations | Marquee, View Transitions |
| **Agency Kinetic** (агентства) | Text Reveal + Custom Cursor + Marquee | Horizontal Pin, Clip-Path |
| **Product Scroll** (e-commerce) | Horizontal Pin + Parallax + Clip-Path Reveal | Spline 3D, View Transitions |
