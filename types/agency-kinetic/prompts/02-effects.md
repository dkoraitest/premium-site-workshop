# Шаг 2: Premium-эффекты

## Что делаем
Добавляем кастомный курсор с magnetic-эффектом и marquee-полосы.

## Промпт для Claude Code

> Добавь premium-эффекты:
> 1. Кастомный курсор: маленький dot (8px, solid) + большой circle-follower (40px, border only) с GSAP quickTo lerp. На hover кнопок/ссылок: follower увеличивается до 60px и меняет blend-mode на exclusion. Magnetic-эффект для CTA-кнопок (сдвиг 15px к курсору при приближении). На touch-устройствах — скрыть полностью (matchMedia pointer: fine).
> 2. Две marquee-полосы: filled text + stroke-only text, движутся в противоположных направлениях. Привязать скорость к scroll velocity через Lenis. Крупный шрифт (48-72px), uppercase, font-weight 700.
> 3. Staggered text reveal для заголовков секций: SplitType разбивает на слова, GSAP анимирует translateY(100%) из overflow:hidden контейнера, stagger 0.05s, ease power4.out, trigger по ScrollTrigger.

## Ожидаемый результат
Интерактивный курсор следует за мышью, кнопки притягиваются, бегущие строки, текст раскрывается при скролле.
