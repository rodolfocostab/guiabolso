#!/bin/bash

# Dar permissão ao usuario atual ao grupo Docker

sudo usermod -aG docker $USER

# Abaixar imagem Mongo

sudo docker pull mongo

#  Iniciar Docker Swarm mode

sudo docker swarm init

# Criação da rede que será feito deploy da stack dos containers

docker network create -d overlay api-net

# Deploy Portainer

docker stack deploy --compose-file=./dev/portainer.yml api-dev
