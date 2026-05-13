# Шаг 2: Premium-эффекты

## Что делаем
Усиливаем parallax и добавляем clip-path reveal анимации.

## Промпт для Claude Code

> Добавь premium-эффекты:
> 1. Multi-layer parallax: фоновый слой 0.3x скорости скролла, средний 0.6x, передний 1x. GSAP ScrollTrigger с разными значениями y для каждого слоя. Hero: текст уходит вверх быстрее чем изображение.
> 2. Clip-path reveal для изображений галереи: circle(0% at 50% 50%) → circle(100% at 50% 50%) через GSAP ScrollTrigger. Для второго изображения: inset() reveal слева направо. Длительность 0.8-1.2s, ease power2.inOut.
> 3. Smooth scroll через Lenis (если ещё не подключён).
> 4. Fade-in секций: translateY(30px) + opacity через IntersectionObserver или ScrollTrigger.

## Ожидаемый результат
Многослойный parallax, изображения раскрываются при скролле, плавное кинематографичное ощущение.
