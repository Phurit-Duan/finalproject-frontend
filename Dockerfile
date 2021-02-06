FROM node:alpine

MAINTAINER phurit.duan@bumail.net

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "start"]