FROM node:11-alpine

WORKDIR /api

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD npm run start
