FROM node:19-alpine

COPY . .

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

WORKDIR /gatewaygql

RUN yarn install

RUN yarn setupTS

ENV PORT=4000

CMD [ "node", "gateway.js" ]
