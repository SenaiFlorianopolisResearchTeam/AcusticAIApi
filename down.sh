#!/usr/bin/env sh

_() {
  sudo docker-compose down
} && _

unset -f _