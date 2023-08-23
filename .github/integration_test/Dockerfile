FROM alpine

COPY . .

RUN apk update
RUN apk add firefox

RUN yarn build

CMD ["yarn", "start"]