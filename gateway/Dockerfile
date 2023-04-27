FROM node:19-alpine

WORKDIR /app

RUN mkdir -p dist/tools/

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY .env ./
COPY src/ ./src
COPY tsconfig.json ./
COPY dist/tools/ ./dist/tools

RUN yarn tsc

ENV PORT=4000
EXPOSE 4000:4000

CMD [ "yarn", "start" ]
