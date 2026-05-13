# Шаг 2: Premium-эффекты

## Что делаем
Добавляем кинематографичные эффекты: scroll-scrub видео, film grain, fade-in анимации.

## Промпт для Claude Code

> Добавь premium-эффекты:
> 1. Scroll-scrub видео: при скролле видео проигрывается вперёд/назад (GSAP ScrollTrigger). Загрузи видео как blob через XHR для плавного seeking. Smooth seeking: targetTime + requestAnimationFrame + lerp (коэффициент 0.06). Snap к target при разнице < 0.002s.
> 2. Film grain overlay: полноэкранный div с CSS noise-текстурой поверх всего сайта, opacity 0.03-0.05, pointer-events: none.
> 3. Fade-in анимации: все секции появляются с translateY(30px) + opacity 0 при скролле через IntersectionObserver.
> 4. Hero текст fade-out: текст плавно уходит при начале скролла (opacity 1→0, translateY вверх) через ScrollTrigger.

## Ожидаемый результат
Сайт с кинематографичным ощущением: видео реагирует на скролл, элементы плавно появляются.
