FROM node:16-alpine3.16

COPY . .

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

WORKDIR /gatewaygql

RUN yarn install --frozen-lockfile

RUN yarn setupTS

ENV PORT=3000

CMD [ "node", "gateway.js" ]
