#!/bin/bash
set -e
cd /home/site/wwwroot

echo "Purging stale .next/cache..."
rm -rf .next/cache

echo "Ensuring production dependencies are installed..."
if [ ! -f "node_modules/next/dist/bin/next" ]; then
  npm install --omit=dev --no-audit --no-fund
fi

echo "Starting Next.js on port 3000..."
exec node node_modules/next/dist/bin/next start -p 3000
