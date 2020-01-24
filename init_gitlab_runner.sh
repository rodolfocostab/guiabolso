#!/bin/bash

# Instalação do gitlab-runner

sudo apt install -y gitlab-runner

# Iniciar gitlab-runner

sudo systemctl start gitlab-runner

# Registro no projeto deploy-api o shell para CI/CD

sudo gitlab-runner register -n --url "https://gitlab.com/" --registration-token "ssMxGqCS-Py2yQNwQWvT" --executor "shell" --tag-list "shell" --description "local-shell" --locked="false"

# Permissão ao runner no grupo Docker

sudo usermod -aG docker gitlab-runner
