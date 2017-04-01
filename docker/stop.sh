#!/usr/bin/env bash
set -o errexit

docker stop iot-sense-postgres | xargs docker rm
