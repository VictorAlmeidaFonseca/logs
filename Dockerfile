FROM node:14-alpine

ENV ELASTIC_HOST=http://localhost
ENV ELASTIC_PORT=9200
ENV NODE_PORT=3001

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

RUN printenv

CMD ["npm","run","start" ]
