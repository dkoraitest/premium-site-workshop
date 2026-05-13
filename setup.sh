#!/bin/bash
# Premium Site Workshop — установка всех skills
# Запусти один раз перед началом работы

echo "Устанавливаю skills для Claude Code..."
echo ""

# Анимации (приоритет)
echo "[1/4] gsap-skills — правильный GSAP, ScrollTrigger, performance"
npx skills add greensock/gsap-skills

echo ""
echo "[2/4] taste-skill — premium UI quality"
npx skills add https://github.com/Leonxlnx/taste-skill

echo ""
echo "[3/4] grill-me — stress-test планов и решений"
npx skills add mattpocock/skills --skill "grill-me"

echo ""
echo "[4/4] orchestrating-gsap-lenis (ручная установка)"
echo "  → Скачай с https://skills.rest/skill/orchestrating-gsap-lenis"
echo "  → Положи SKILL.md в ~/.claude/skills/orchestrating-gsap-lenis/"

echo ""
echo "Готово! Все skills установлены."
echo "Создай папку проекта: mkdir my-site && cd my-site"
echo "Открой Claude Code и начинай с этапа 1."
