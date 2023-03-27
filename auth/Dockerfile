FROM node:19-alpine

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

WORKDIR /auth

#COPY package.json yarn.lock ./
#RUN yarn install --frozen-lockfile

#RUN yarn build

COPY . .

ENV PORT=3004

#CMD [ "yarn", "start" ]