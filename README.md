# IOT Sense

This project contains instructions on how to setup your Raspberry Pi to detect
motion with PIR motion sensor and to send alert to a REST API.

Visualization of Raspberry Pi motion sensor status is rendered with a React based
application.

## Docker

Database for developement purposes is ran by a Docker container.

#### Installation

Create new docker container

	$ docker-machine create iot-sense --driver virtualbox

Connect to the container

	$ eval $(docker-machine env iot-sense)

Install PostgreSQL into the container

	$ docker/init.sh

Start the container

	$ docker/start.sh

#### Connect to database

	$ psql -U postgres -h <DOCKER_HOST_IP> -p 48301

#### Stop container and reset database

	$ docker/stop.sh
