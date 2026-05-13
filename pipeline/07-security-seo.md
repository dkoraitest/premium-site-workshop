# Этап 7: Security + SEO + Legal

Три обвязки перед деплоем. **Security-проверку делай в ОТДЕЛЬНОЙ сессии Claude Code** — агент, который писал код, предвзят к своим ошибкам.

---

## Security

Запусти **новую сессию** Claude Code и попроси:

> Проведи security-аудит этого проекта по чек-листу checklists/security.md. Проверь каждый пункт, отчитайся в формате PASS/FAIL.

### Ключевые проверки
- `.env` в `.gitignore` — токены не попадают в git
- Нет hardcoded API ключей в коде
- XSS-защита: все данные из форм экранируются (`<` → `&lt;`)
- HTTPS работает, HTTP → HTTPS redirect
- Кнопка формы disable при отправке

---

## SEO

Промпт из `types/{тип}/prompts/03-seo.md` — добавляет:
- Meta: title, description, canonical
- Open Graph + Twitter Card
- JSON-LD schema (Organization + WebSite + WebPage)
- sitemap.xml, robots.txt, llms.txt

---

## Legal

Промпт:
> Добавь страницу Privacy Policy (ФЗ-152 для РФ, GDPR если доступен из EU). Добавь cookie consent баннер с кнопкой принятия и ссылкой на policy. Баннер фиксирован внизу, запоминает выбор в localStorage.

Подробнее: `common/legal.md`

---

## Инструменты

| Инструмент | Зачем |
|------------|-------|
| Security-агент (отдельная сессия!) | Проверка по `checklists/security.md` |
| SEO-промпт | `types/{тип}/prompts/03-seo.md` |
| Lighthouse MCP | Performance + a11y + SEO scoring |
| Legal-гайд | `common/legal.md` |

---

## Ожидаемый результат

Сайт безопасен (PASS по всем пунктам), SEO готов (meta + schema + sitemap), privacy policy на месте.
