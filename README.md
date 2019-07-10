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

# or

npm install
```

### 4º Passo - Iniciar a aplicação

#### Manualmente

```bash
yarn start

# or

npm run start
```

#### Docker

Este [docker-compose](docker-compose.yml) vai gerar a imagem do docker (caso não exista) e subir o serviço na porta 3000.

```
# subir serviço
docker-compose up -d

# parar serviço
docker-compose down -v
```

## Issues para resolver

[Acesse aqui](https://github.com/ealbuquerque/production-control-web/issues)
