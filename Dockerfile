# Estágio 1
FROM node:8-alpine as builder

WORKDIR /usr/src/app 

COPY package.json ./
RUN yarn install --production

COPY public ./public
COPY src ./src

ENV REACT_APP__API_URL 'http://localhost:5000'

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

RUN yarn build

# Estágio 2
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /usr/share/nginx/html/*

COPY --from=builder ./usr/src/app/build /usr/share/nginx/html

RUN chmod -R 777 /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
