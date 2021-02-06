FROM node:alpine

MAINTAINER phurit.duan@bumail.net

RUN yarn install

WORKDIR /app

COPY package.json /app

COPY . /app

CMD ["yarn", "start"]