@AGENTS.md

# SetFlow — Рабочий стол съёмочной группы

## Стек
- **Next.js 16** (React 19, TypeScript, App Router)
- **UI:** shadcn/ui + Tailwind CSS 4
- **State:** Zustand
- **ORM:** Drizzle ORM + PostgreSQL 16
- **i18n:** next-intl (ru по умолчанию)
- **Деплой:** Docker Compose (docker/)

## Структура
- `src/app/(dashboard)/` — внутренние страницы (sidebar layout)
- `src/app/portal/[slug]/` — клиентский портал
- `src/app/site/[slug]/` — авто-микросайт мероприятия
- `src/db/schema.ts` — Drizzle-схема (все таблицы)
- `src/shared/constants/` — роли, категории, типы
- `src/i18n/` — переводы ru/en

## Команды
```bash
npm run dev          # Dev-сервер
npm run build        # Production build
npx drizzle-kit generate  # Генерация миграций
npx drizzle-kit push      # Применить схему к БД
docker compose -f docker/docker-compose.yml up -d  # PostgreSQL + app + nginx
```

## Спецификация
Полный план: `FilmCrew_Plan.pdf` в корне проекта.
