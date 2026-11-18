#!/bin/bash
cd /home/site/wwwroot

# Clear stale incremental cache and prerenders on every startup
rm -rf .next/cache

if [ -f "server.js" ]; then
  echo "Starting Next.js standalone on port 3000..."
  export PORT=3000
  export HOSTNAME="0.0.0.0"
  exec node server.js
fi

if [ ! -f "node_modules/.bin/next" ]; then
  echo "Installing dependencies..."
  npm install --omit=dev --no-audit --no-fund
fi

echo "Starting Next.js on port 3000..."
exec npx next start -p 3000
