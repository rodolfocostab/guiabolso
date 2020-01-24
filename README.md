# Projeto API Guiabolso

## Como usar:

### Requisitos

Docker instalado(caso não tenha seguir passo abaixo), para Ubuntu(Debian) e distribuições utilizar comando abaixo:

```
chmod +x install_docker.sh && ./install_docker.sh
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
