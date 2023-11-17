#!/usr/bin/env sh

_() {
  docker-compose up -d --build
} && _

unset -f _