#!/usr/bin/env sh

_() {
  cd ..
  docker-compose up -d
  node main.js
} && _

unset -f _