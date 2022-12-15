FROM node:17

WORKDIR /crawler

COPY package.json .

RUN npm install

COPY . .