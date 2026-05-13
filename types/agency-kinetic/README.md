# Agency Kinetic — Text Reveal + Custom Cursor + Marquee

## Для кого
Креативные агентства, дизайн-студии, портфолио, fashion-бренды, event-лендинги.

## Что получается
- Staggered text reveal (слова появляются по одному)
- Custom cursor с magnetic-эффектом на кнопках
- Marquee текстовые полосы между секциями
- Smooth scroll (Lenis)
- Сильная типографика, минимум изображений, максимум движения

## Стек
- GSAP + SplitText/SplitType (text reveal)
- GSAP quickTo (cursor, magnetic)
- Lenis (smooth scroll)
- CSS mix-blend-mode (cursor inversion)

## Промпты

### 1. Создание сайта
> Создай лендинг для креативного агентства [НАЗВАНИЕ]. Стиль: Awwwards-level editorial. Крупная типографика (80-120px hero headline), serif + sans-serif микс. Минимум цветов (чёрный + белый + один акцент). Hero: полноэкранный с анимированным заголовком — каждое слово появляется из-под маски (overflow:hidden + translateY). Между секциями — marquee-полосы с ключевыми словами. Секция кейсов — hover на карточке показывает видео-превью.

### 2. Custom cursor
> Добавь кастомный курсор: маленький dot (8px, solid) + большой circle-follower (40px, border only) с GSAP quickTo lerp. На hover кнопок/ссылок: follower увеличивается и меняет blend-mode на exclusion. Magnetic-эффект для CTA-кнопок (сдвиг 15px к курсору). На touch-устройствах — скрыть.

### 3. Marquee
> Добавь 2 marquee-полосы: одна — filled text, вторая — stroke-only text, движутся в противоположных направлениях. Привязать скорость к scroll velocity через Lenis. Крупный шрифт (48-72px), uppercase.

## Примеры для вдохновения
- cuberto.com — эталон агентского сайта
- obys.agency — text reveal + cursor
- motto.is — staggered typography
- locomotive.ca — smooth scroll pioneer
