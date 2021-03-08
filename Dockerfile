FROM node:alpine

MAINTAINER phurit.duan@bumail.net

WORKDIR /app

COPY package.json /app

COPY . /app

RUN yarn install
RUN npm install --save-dev webpack@4.44.2
RUN rm -f package-lock.json

CMD ["yarn", "start"]