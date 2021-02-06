FROM node:alpine

MAINTAINER phurit.duan@bumail.net

RUN apt-get update && apt-get dist-upgrade -y \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "start"]