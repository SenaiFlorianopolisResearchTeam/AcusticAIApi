FROM node:19-alpine

WORKDIR /website

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start"]