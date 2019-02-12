FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 6060
CMD yarn start
