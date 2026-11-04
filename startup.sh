#!/bin/bash
cd /home/site/wwwroot

if [ ! -f "node_modules/.bin/next" ]; then
  echo "Installing dependencies..."
  npm install --omit=dev --no-audit --no-fund
fi

echo "Starting Next.js on port 3000..."
npx next start -p 3000
