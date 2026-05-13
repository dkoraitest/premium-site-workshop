# Этап 4: Реализация

Основной этап — строим сайт. Самый длинный блок на воркшопе (60 мин).

---

## Порядок работы

### Шаг 01: Hero + базовая архитектура

Откройте `types/{ваш-тип}/prompts/01-site.md`, скопируйте промпт, замените placeholder.

**Checkpoint 1 (~15 мин):** Hero на весь экран, CTA видна, mobile ok.
→ Если проблемы: `checkpoints/cp1-hero.md`

### Шаг 01 (продолжение): Все секции

Допиливаем секции, контент, responsive.

**Checkpoint 2 (~35 мин):** 4-5 секций, навигация, нет горизонтального скролла.
→ Если проблемы: `checkpoints/cp2-sections.md`

### Шаг 02: Premium-эффекты

Откройте `types/{ваш-тип}/prompts/02-effects.md`, скопируйте промпт.

**Checkpoint 3 (~60 мин):** Основной эффект работает, анимации плавные, mobile fallback.
→ Если проблемы: `checkpoints/cp3-effects.md`

---

## Типичные проблемы на этом этапе

| Проблема | Решение |
|----------|---------|
| GSAP не подключён | CDN: `cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js` |
| ScrollTrigger не работает | Отдельный файл + `gsap.registerPlugin(ScrollTrigger)` |
| Lenis конфликтует | `lenis.on('scroll', ScrollTrigger.update)` |
| Анимация дёргается | Анимируй только `transform` и `opacity` |
| Мобильные тормозят | `matchMedia('(max-width: 768px)')` — отключи тяжёлое |

---

## Ожидаемый результат

Работающий сайт: hero + все секции + premium-эффекты + responsive. Открывается в браузере.
