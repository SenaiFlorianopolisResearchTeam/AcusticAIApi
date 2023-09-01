FROM node:18 AS base
WORKDIR /base
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18 AS build
WORKDIR /build
COPY ./routes/* /build/routes/
COPY ./services/* /build/services/
COPY ./main.ts ./secrets.ts ./server.ts ./.env ./tsconfig.json /build/
COPY --from=base /base/package.json /base/yarn.lock /build/
COPY --from=base /base/node_modules /build/node_modules
RUN yarn add tsc --global
RUN yarn build

FROM node:18 AS prod
WORKDIR /prod
COPY --from=build /build/dist /prod/dist
COPY --from=build /build/yarn.lock /build/.env /build/package.json /prod/
COPY --from=build /build/node_modules /prod/node_modules
CMD ["yarn", "start"]