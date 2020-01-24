#!/bin/bash

# Ubuntu 19.04 (Distribuições Debian)

# Atualizar repositórios de software

sudo apt-get -y update

# Desinstalar versões antigas do Docker

sudo apt-get remove -y docker docker-engine docker.io

# Instalação Docker

sudo apt install -y docker.io

#  Iniciar e automatizar o Docker quando sistema iniciado

sudo systemctl start docker
sudo systemctl enable docker
