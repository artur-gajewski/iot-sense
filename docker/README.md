# Installing docker

## For Linux

* Follow the instructions at: https://docs.docker.com/installation/ubuntulinux/
  NOTICE that you need Docker version > 1.0

* Make yourself part of the `docker` group, so you can run `docker` commands without sudo (relogin might be needed)

* add dns conf to /etc/default/docker if you can't connect to for example debian.org when running docker/init.sh

* Add `127.0.0.1 dockerhost` to your `/etc/hosts`

## For Mac OS X

* Use `brew install docker`

* Run `curl http://static.dockerfiles.io/boot2docker-v1.0.1-virtualbox-guest-additions-v4.3.12.iso > ~/.boot2docker/boot2docker.iso`

* Run `VBoxManage sharedfolder add boot2docker-vm -name home -hostpath /Users`

* Run `boot2docker ip` and add `BOOT2DOCKERIP dockerhost` to your `/etc/hosts`


## Setup database Docker for IOT-Sense

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

