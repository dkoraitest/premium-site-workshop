# Этап 5: Контент

Замена placeholder-контента на реальный. Тексты, изображения, видео.

---

## 1. Генерация текстов

### Промпт: Копирайтинг всего сайта

> Прочитай `BUSINESS_ANALYSIS.md` и `SITE_SPEC.md`. На основе бизнес-анализа и спецификации напиши весь текстовый контент для сайта.
>
> Для каждой секции подготовь:
> - **Заголовок (H1/H2):** цепляющий, конкретный, без воды. Не «Добро пожаловать», а ценностное предложение.
> - **Подзаголовок:** 1-2 предложения, раскрывающие заголовок.
> - **Основной текст:** короткий, по делу. Каждый абзац — одна мысль.
> - **CTA (призыв к действию):** конкретный текст кнопки. Не «Подробнее», а «Получить демо», «Рассчитать стоимость», «Записаться на консультацию».
>
> Требования к текстам:
> - Язык: [РУССКИЙ / АНГЛИЙСКИЙ]
> - Тон: [ИЗ БИЗНЕС-АНАЛИЗА — формальный / полуформальный / неформальный]
> - Фокус на выгоде для клиента, не на описании компании
> - Конкретные цифры вместо «большой опыт» (15 лет, 200+ проектов, 50 компаний)
> - Hero-заголовок: максимум 7 слов, ударный
> - Снимай возражения аудитории в секции FAQ (минимум 5 вопросов)
> - Социальное доказательство: подготовь шаблоны для отзывов и кейсов
>
> Формат вывода: готовый текст для каждой секции, который можно вставить в HTML без редактирования.

### Промпт: Замена placeholder-текстов в коде

> Замени все placeholder-тексты на сайте на реальный контент. Прочитай файл `CONTENT.md` (или текст ниже) и подставь соответствующие тексты в HTML.
>
> Проверь:
> - Нет слов «Lorem ipsum», «placeholder», «ваш текст здесь»
> - Все заголовки и описания заменены
> - Контактные данные реальные: [ТЕЛЕФОН], [EMAIL], [АДРЕС]
> - Ссылки на соцсети ведут на реальные аккаунты: [INSTAGRAM], [TELEGRAM], [LINKEDIN]
> - Юрлицо в футере: [НАЗВАНИЕ ООО / ИП], [ИНН], [ГОД]
> - Copyright актуальный: (c) [ГОД] [НАЗВАНИЕ]

---

## 2. Генерация изображений

### Hero-изображение / фон

**Midjourney промпт-шаблон:**

```
[ОПИСАНИЕ СЦЕНЫ] --ar 16:9 --s 750 --q 2
Premium website hero image. [НАСТРОЕНИЕ: dark and moody / bright and airy / futuristic / organic].
[ЦВЕТОВАЯ ПАЛИТРА: deep navy and gold / soft gradients / monochrome].
Clean composition, lots of negative space, editorial quality, no text, no watermark.
Professional commercial photography style. Shallow depth of field.
8K resolution, photorealistic. --v 6.1
```

**Примеры для разных типов бизнеса:**

Технологии/AI:
```
Abstract data visualization flowing through dark space, glowing neural network connections in teal and navy blue, futuristic and clean, premium tech aesthetic, no text --ar 16:9 --s 750 --q 2 --v 6.1
```

Консалтинг/Агентство:
```
Modern office environment, confident team in business casual, soft directional lighting, shallow depth of field, warm tones with teal accents, editorial commercial style, no text --ar 16:9 --s 750 --q 2 --v 6.1
```

Продукт/E-commerce:
```
[ПРОДУКТ] floating in clean studio environment, soft studio lighting, premium product photography, minimal background, subtle reflections, luxury commercial aesthetic, no text --ar 16:9 --s 750 --q 2 --v 6.1
```

### DALL-E промпт-шаблон

```
A premium hero image for a [TYPE] website. [ОПИСАНИЕ СЦЕНЫ].
Style: professional, editorial, clean, high-end. Color palette: [ЦВЕТА].
No text, no watermark, no UI elements. Photorealistic, 8K quality.
Aspect ratio 16:9.
```

### Иконки и иллюстрации

```
Minimal line icon set for a premium website. [ТЕМА: technology / business / education / health].
Consistent 2px stroke width, [ЦВЕТ] on transparent background.
Icons: [СПИСОК — dashboard, analytics, team, security, speed, support].
Clean vector style, no fill, elegant and modern. SVG-ready.
```

---

## 3. Генерация видео (для video-hero типа)

Полный промпт для генерации hero-видео — в `types/video-hero/video-generation.md`.

Краткая версия:

> A premium cinematic website hero video for [БИЗНЕС].
> Main subject: [ОБЪЕКТ / СЦЕНА].
> Visual: slow cinematic movement, soft lighting, shallow depth of field, premium textures.
> Color: [ПАЛИТРА ИЗ БИЗНЕС-АНАЛИЗА].
> Clean, minimal, no text, no logo, no watermark. 5-10 seconds, seamless loop.

**Инструменты:** Kling (рекомендуется), Runway Gen-3, Pika, Sora.

**Пост-обработка:**
```bash
# Сжатие для веба (8MB -> 2MB)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1920:-2" -an -movflags +faststart hero.mp4

# Scroll-scrub версия (all-keyframes)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" -g 1 -an -movflags +faststart scrub.mp4

# Poster-кадр (первый кадр для preload)
ffmpeg -i hero.mp4 -vf "select=eq(n\,0)" -q:v 2 hero_poster.jpg
```

---

## 4. Оптимизация изображений

### Промпт для Claude Code

> Оптимизируй все изображения на сайте:
> 1. Конвертируй все JPG/PNG в WebP (quality 80). Оставь оригиналы как fallback.
> 2. В HTML используй `<picture>` с `<source type="image/webp">` и `<img>` fallback.
> 3. Задай width и height атрибуты для всех `<img>` — это предотвращает CLS (Cumulative Layout Shift).
> 4. Все изображения ниже fold: добавь `loading="lazy"`.
> 5. Hero-изображение: НЕ ставь lazy (это LCP-элемент), добавь `fetchpriority="high"`.
> 6. Проверь, что ни одно изображение не весит больше 200KB (кроме hero).
> 7. Если есть декоративные иконки — замени на inline SVG (меньше HTTP-запросов).

### Команды для ручной оптимизации

```bash
# WebP конвертация
cwebp -q 80 input.jpg -o output.webp

# Ресайз до нужного размера (не грузить 4000px для карточки 400px)
ffmpeg -i input.jpg -vf "scale=800:-2" -quality 80 output.webp

# Массовая конвертация всех jpg в текущей папке
for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
```

---

## 5. Чеклист контента

- [ ] Hero: заголовок ударный (до 7 слов), не generic
- [ ] Подзаголовок hero: раскрывает ценность, не повторяет заголовок
- [ ] CTA: конкретный текст кнопки (не «Подробнее», не «Узнать больше»)
- [ ] Все секции: реальный текст, не placeholder
- [ ] Контакты: реальный телефон, email, адрес
- [ ] Соцсети: ссылки ведут на существующие аккаунты
- [ ] Юрлицо: правильное название в футере
- [ ] Отзывы: реальные или убраны (не «Иван И., довольный клиент»)
- [ ] Кейсы: реальные цифры и результаты
- [ ] Изображения: реальные (не стоковые фото с watermark)
- [ ] Видео: сжато (< 3MB), poster-кадр задан
- [ ] Все изображения в WebP, с width/height, lazy loading ниже fold
- [ ] Нет битых изображений (все загружаются)
- [ ] og:image существует и корректного размера (1200x630)
