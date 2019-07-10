FROM node:8-alpine

# Diretorio onde a aplicacao sera publicada
WORKDIR /usr/src/app 

# Instalacao de dependencias
COPY package.json ./
RUN yarn install

COPY public ./public

ENV REACT_APP__API_URL 'http://localhost:5000'

COPY src ./src
COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 3000

CMD [ "yarn", "start", "--no-daemon" ]
