FROM node:alpine

MAINTAINER phurit.duan@bumail.net

WORKDIR /app

COPY package.json /app

COPY . /app

RUN yarn install

CMD ["yarn", "start"]