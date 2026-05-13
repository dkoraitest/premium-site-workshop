# Шаг 2: Premium-эффекты

## Что делаем
Усиливаем анимации: staggered появление, hover-эффекты, marquee.

## Промпт для Claude Code

> Добавь premium-эффекты:
> 1. Staggered появление bento-карточек через GSAP ScrollTrigger (stagger: 0.1, from: "start", ease: "power2.out").
> 2. Hover на карточках: scale(1.02), translateY(-4px), усиление glow-тени в цвете акцента. Transition 0.3s ease.
> 3. Marquee-полоса между hero и features с ключевыми словами продукта. CSS animation: translateX(0) → translateX(-50%) infinite linear 20s. Дублируй текст 3-4 раза.
> 4. Smooth scroll через Lenis для всей страницы.

## Ожидаемый результат
Живые, отзывчивые анимации. Карточки появляются каскадом, реагируют на hover, бегущая строка между секциями.
