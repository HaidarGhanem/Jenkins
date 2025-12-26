FROM node:20-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]