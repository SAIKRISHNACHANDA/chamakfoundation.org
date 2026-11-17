#!/bin/bash
set -e
cd /home/site/wwwroot

export PORT=3000
echo "Starting Next.js standalone server on port $PORT..."
exec node server.js
