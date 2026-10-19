# Шаблон: NestJS + React

Монорепо на Turborepo и yarn workspaces.

| Папка           | Что                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `apps/server`   | API: NestJS + Prisma + PostgreSQL — см. [apps/server/README.md](apps/server/README.md)          |
| `apps/frontend` | Кабинет: React + Vite + TanStack Query — см. [apps/frontend/README.md](apps/frontend/README.md) |

## Запуск

```bash
yarn                                   # зависимости всех приложений
cp apps/server/.env.example apps/server/.env   # заполнить
yarn dev                               # сервер :4003 и фронт :5173
```

Проверки: `yarn check-types`, `yarn lint`, `yarn format`.

## Деплой

`./deploy.sh` на сервере: `git pull` → установка → миграции и сборка API → сборка фронта → `pm2 restart all`.
Фронт перед сборкой требует `apps/frontend/.env.production` с `VITE_API_URL`.
Шаблон nginx — `nginx.conf` (заменить домены, путь и порт).
