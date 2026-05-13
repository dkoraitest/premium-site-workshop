# Production Polish

Финальная полировка перед запуском.

## Favicon и мета

> Добавь favicon: создай набор из favicon.ico (32x32), apple-touch-icon.png (180x180), favicon-16x16.png, favicon-32x32.png. Если нет готовой иконки — сгенерируй SVG favicon из первой буквы названия бренда в стиле сайта. Добавь в head: link rel="icon", link rel="apple-touch-icon". Также добавь meta theme-color в цвете бренда.

## PWA Manifest (опционально)

> Создай manifest.json: name, short_name, icons (192x192, 512x512), start_url, display: standalone, theme_color, background_color. Добавь link rel="manifest" в head.

## Сжатие видео и изображений

### Видео
```bash
# Hero видео для автоплея (целевой размер ~2MB)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1920:-2" -an -movflags +faststart hero.mp4

# Scroll-scrub версия (all-keyframes для точного seeking)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -g 1 -an -movflags +faststart scrub.mp4

# Poster-кадр
ffmpeg -i hero.mp4 -vf "select=eq(n\,0)" -q:v 2 hero_poster.jpg
```

### Изображения
```bash
# WebP конвертация
cwebp -q 80 input.jpg -o output.webp

# Или через ffmpeg
ffmpeg -i input.jpg -quality 80 output.webp
```

## Lazy Loading

> Добавь lazy loading для всех изображений и видео ниже первого экрана. Изображения: loading="lazy". Видео (не hero): используй IntersectionObserver — preload="none" по умолчанию, переключай на preload="auto" и play() при входе в viewport, pause() при выходе. Hero видео грузи сразу (оно выше fold).

## Responsive

> Проверь и исправь адаптив для всех breakpoints: mobile (375px), tablet (768px), desktop (1024px+). Навигация на мобильных — burger menu. Hero текст — уменьшить font-size. Bento grid — одна колонка. Горизонтальные секции — вертикальный скролл. Кастомный курсор — скрыть на тач-устройствах.

## На что обратить внимание
- Видео для scroll-scrub обязательно с `-g 1` (all keyframes) и `-movflags +faststart`
- `-an` убирает аудио-дорожку (не нужна для фоновых видео)
- WebP экономит 25-35% по сравнению с JPEG при том же качестве
- `loading="lazy"` не применять к элементам первого экрана — это замедлит LCP
