FROM node:19-alpine

COPY . .

ENV NODE_ENV=production

RUN yarn install

RUN yarn add tsc

RUN apk add bash

RUN yarn start

ENV PORT=4000

CMD [ "node", "gateway.js" ]
