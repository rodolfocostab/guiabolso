#!/bin/bash

# Dar permissão ao usuario atual ao grupo Docker

sudo usermod -aG docker $USER

#  Iniciar Docker Swarm mode

sudo docker swarm init

# Criação da rede que será feito deploy da stack dos containers

docker network create -d overlay server-net
