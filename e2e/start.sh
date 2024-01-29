#!/usr/bin/env sh

_() {
  cd ..
  docker-compose up -d
  cd e2e/
  node main.js
} && _

unset -f _