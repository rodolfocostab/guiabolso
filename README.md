# Projeto API Guiabolso

## Como usar:

### Requisitos

Docker instalado(caso não tenha seguir passo abaixo), para Ubuntu(Debian) e distribuições utilizar comando abaixo:

```
chmod +x install_docker.sh && ./install_docker.sh
```

Docker inicialização, precisamos iniciar o swarm e criar a rede para deploy, executar shell abaixo:

```
chmod +x init_docker.sh && ./init_docker.sh
```

Gitlab Runner, precisamos fazer o registro da nossa maquina como runner local no site do gitlab.com, executar shell abaixo:

```
chmod +x init_gitlab_runner.sh && ./init_gitlab_runner.sh
```

Nesse caso acima utilizaremos deploy-api projeto já criado para o CI/CD mas podemos cria um novo

Teremos que mudar somente a variavel --registration-token "xxx" do shell.

## Rodando localmente sem a ferramenta Gitlab CI/CD

Nesse caso é possivel também é somente rodar comandos abaixo

```
docker build . --tag api:[tag_escolhida]
```

Depois disso fazer deploy manual Portainer(Opcional)

```
docker stack deploy --compose-file=./dev/portainer.yml nome_da_sua_stack
```

Depois disso fazer deploy manual api

```
docker stack deploy --compose-file=./dev/server.yml nome_da_sua_stack
```


### Testar a API

A API pode ser utilizada via navegador ou como exemplo via comando curl realizando post para inclusao ou get para consulta.

```
http://127.0.0.1:3000/deploy/
```

### Pagina Portainer

Como estamos utilizando Dokcer Swarm para realizar deploy em produção de forma garantida que aplicação nao fique
em nenhum momento off-line com replicas e subidas de atualizações paralelas, coloquei um serviço para
manipulação via interface Web interessante para tirar a complexidade de atualizações e administração do server.

```
localhost:9000
```

Senha padrão de instalação customizavel da página Admin:

```
user: admin
passwd: admin123
```
