#!/usr/bin/env bash
set -o errexit

start_postgresql() {
  docker run --detach --name iot-sense-postgres --publish 48301:5432 --publish 48302:80 --publish 48303:22 postgres
}

main() {
  start_postgresql
}

main "$@"
