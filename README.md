# Controle de Produção

## Visão de negócio

O objetivo principal é disponibilizar webservices para administrar as operações dentro de um Centro de Produção. Neste centro são administrados matérias-prima, funcionários e produtos finais, sendo essenciais alguns relatórios com filtros específicos.

## Visão Técnica

Frontend baseado em ReactJS e disponibilizada em Docker.

## Execução

### 1º Passo - Clonar projeto

1. Abra o terminal e acesse um  diretório de sua preferência.
2. Clone o projeto com o comando abaixo:

```
git clone https://github.com/ealbuquerque/production-control-web.git
```

### 2º Passo - Variáveis de ambiente

Crie um arquivo com o nome `.env` no diretório raiz da aplicação.

Template:
```
REACT_APP__API_URL='http://localhost:5000'
```

### 3º Passo - Baixar dependências

```bash
yarn install

# ou

npm install
```

### 4º Passo - Iniciar a aplicação

#### Manualmente

```bash
yarn start

# ou

npm run start
```

- Abra o projeto em um navegador de sua preferência ([https://localhost:3000](https://localhost:3000))

#### Docker

Para rodar este projeto com o docker você deve ter o [docker](https://www.docker.com/) e o [docker-compose](https://docs.docker.com/compose/) instalados.

Este [docker-compose](docker-compose.yml) vai gerar a imagem do **frontend** (caso não exista) e subir o serviço na porta `3000`.

```
# subir serviço
docker-compose up -d

# parar serviço
docker-compose down
```

- Abra o projeto em um navegador de sua preferência ([https://localhost:3000](https://localhost:3000))

## Issues para resolver

[Acesse aqui](https://github.com/ealbuquerque/production-control-web/issues)
