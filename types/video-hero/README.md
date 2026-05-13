# Video Hero — Кинематографичный scroll-scrub сайт

## Для кого
Luxury-бренды, tech-компании, недвижимость, резиденции, продуктовые лендинги. Любой бизнес, где важен wow-эффект первого экрана.

## Что получается
- Full-screen видео на первом экране с overlay-текстом
- Видео проигрывается при скролле (scroll-scrub) — как у Apple
- Плавные fade-in анимации секций
- Film grain overlay для кинематографичности
- Smooth scroll (Lenis)

## Примеры
- aibuildermsk.ru — AI Builder (создан с этими промптами)
- apple.com/iphone — scroll-scrub продуктового видео

## Стек
- GSAP + ScrollTrigger (scroll-scrub)
- Lenis (smooth scroll)
- Vanilla HTML/CSS/JS
- Kling или Runway (генерация видео)
- ffmpeg (сжатие и подготовка видео)

## Промпты (в порядке использования)

### 1. Генерация видео → `video-generation.md`
Промпт для Kling/Runway. Заполни placeholders: тип бренда, главный объект, трансформация, цветовая палитра.

### 2. Интеграция в сайт → `video-integration.md`
Промпт для Claude Code. Создаёт полную hero-секцию с scroll-scrub, fallback, адаптивом.

## Подготовка видео (ffmpeg)

```bash
# Сжатие hero-видео для автоплея
ffmpeg -i raw.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1920:-2" -an -movflags +faststart hero.mp4

# All-keyframes версия для scroll-scrub
ffmpeg -i raw.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -g 1 -an -movflags +faststart scrub.mp4

# Poster-кадр
ffmpeg -i hero.mp4 -vf "select=eq(n\,0)" -q:v 2 poster.jpg
```

## Известные подводные камни (из опыта AI Builder)

1. **HTTP/2 + scrub на Netlify.** Видео подгружается чанками, seek дёргается. Решение: загрузить весь файл как blob через XHR, затем передать blob URL в `<video>`.

2. **`-g 1` обязателен для scrub.** Без all-keyframes браузер не может точно seek'ать — видео прыгает.

3. **`-movflags +faststart` обязателен.** Без этого метаданные в конце файла — браузер не начнёт воспроизведение пока не скачает всё.

4. **Размер видео.** Free-tier хостинги throttle bandwidth. Держи hero-видео < 3MB, scrub < 5MB.

5. **Mobile.** На iOS autoplay видео с muted работает. Scroll-scrub на мобильных лучше заменить на статичный poster + упрощённую анимацию (CSS parallax).

6. **Smooth seeking.** Не обновляй currentTime напрямую. Используй targetTime + requestAnimationFrame + lerp для плавного перехода.
