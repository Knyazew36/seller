#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

git pull
yarn install --frozen-lockfile
chmod +x apps/server/deploy.sh

# Пакеты раньше сервера: сервер импортирует их собранный dist
(cd packages/marketplaces && yarn build)

# Чат поддержки — строго по зависимостям: core нужен всем, client — react-пакету.
# nest берёт сервер, react — фронт
(cd packages/support-chat-core && yarn build)
(cd packages/support-chat-client && yarn build)
(cd packages/support-chat-nest && yarn build)
(cd packages/support-chat-react && yarn build)

# Сервер: миграции + сборка. Фронт: статика в apps/frontend/dist, её отдаёт nginx
(cd apps/server && ./deploy.sh)
(cd apps/frontend && yarn build)

pm2 restart all
