#!/usr/bin/env bash
set -o errexit

main() {
  docker pull postgres
}

main "$@"
