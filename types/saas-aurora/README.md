# SaaS Aurora — Gradient + Glass + Bento Grid

## Для кого
SaaS-продукты, AI-стартапы, fintech, developer tools. Стиль Linear, Vercel, Stripe.

## Что получается
- Animated mesh gradient фон (aurora/северное сияние)
- Glassmorphism-карточки поверх (blur + transparency)
- Bento grid для раздела features
- Scroll-driven анимации (нативный CSS)
- Чистая, дорогая эстетика без тяжёлых зависимостей

## Стек
- Чистый CSS (gradients, backdrop-filter, grid, animation-timeline)
- Минимальный JS (IntersectionObserver для появления карточек)
- Zero внешних библиотек (или GSAP для усиленных анимаций)

## Промпты

### 1. Создание сайта
> Создай лендинг для [SaaS-ПРОДУКТ]. Стиль: Linear/Vercel — тёмный фон, animated mesh gradient в hero (aurora-эффект из 3-4 radial-gradient, анимация background-position 25s цикл). Поверх — glassmorphism карточки (backdrop-filter blur 20px, rgba background, subtle border). Секция features — bento grid 3 колонки, карточки разных размеров. Scroll-driven появление карточек через CSS animation-timeline: view(). Шрифт: Inter. Палитра: тёмная с одним акцентным цветом.

### 2. Усиление анимаций (опционально)
> Добавь staggered появление bento-карточек через GSAP ScrollTrigger. Hover на карточках: scale(1.02), translateY(-4px), усиление glow-тени в цвете акцента. Добавь marquee-полосу между hero и features с ключевыми словами продукта.

## Примеры для вдохновения
- linear.app — эталон SaaS-дизайна
- vercel.com — aurora gradient hero
- stripe.com — gradient + glassmorphism
- raycast.com — тёмная тема + bento features
