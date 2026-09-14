#!/bin/sh
set -eu
cd /workspace
if curl -sf http://127.0.0.1:8080/ >/dev/null 2>&1; then
  exit 0
fi
npm run dev >/tmp/silva-macedo-dev.log 2>&1 &
exit 0
