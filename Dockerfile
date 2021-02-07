FROM node:alpine

MAINTAINER phurit.duan@bumail.net

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -qq -y build-essential libpq-dev nodejs yarn

WORKDIR /app

COPY package.json /app

COPY . /app

RUN yarn install

RUN yarn install react-scripts -g 

CMD ["yarn", "start"]