FROM node:alpine

MAINTAINER phurit.duan@bumail.net

RUN yarn install && rm -rf node_modules

WORKDIR /app

COPY package.json /app

COPY . /app

CMD ["yarn", "start"]