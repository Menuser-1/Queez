#!/usr/bin/env bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT/backend"
if [ ! -d node_modules ]; then npm install; fi
npm start & BACKEND_PID=$!
cd "$ROOT/frontend"
python3 -m http.server 5500 & FRONTEND_PID=$!
trap 'kill "$BACKEND_PID" "$FRONTEND_PID" 2>/dev/null || true' EXIT
sleep 2
if command -v xdg-open >/dev/null; then xdg-open http://localhost:5500; elif command -v open >/dev/null; then open http://localhost:5500; fi
wait
