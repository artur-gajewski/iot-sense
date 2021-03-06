# IOT Sense

This project contains instructions on how to setup your Raspberry Pi to detect
motion with PIR motion sensor and to send alert to a REST API.

Visualization of Raspberry Pi motion sensor status is rendered with a React based
application.

## Prerequisites

- Raspberry Pi 2, Model B+ (might work with others as well).
- Infrared PIR Motion Sensor Module, 3 x GPIO cables for Raspberry Pi 2, Model B+.
- Flashed Micro-SD card with Raspbian Linux.

## Docker

Database for development purposes is ran by a Docker container. More information can be found under docker folder of this project.

## REST API

Sensors will send data to RESTful API that stores their activity data. API is built on Node Express. More information can be found on the server folder.
