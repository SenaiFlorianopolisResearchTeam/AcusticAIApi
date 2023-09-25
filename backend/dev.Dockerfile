FROM node:18 AS base
WORKDIR /base
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18 AS build
WORKDIR /build
COPY ./routes/* /build/routes/
COPY ./services/* /build/services/
COPY ./main.ts ./secrets.ts ./server.ts ./tsconfig.json /build/
COPY --from=base /base/package.json /base/yarn.lock /build/
COPY --from=base /base/node_modules /build/node_modules
RUN yarn add tsc --global
RUN yarn build

FROM node:18 AS prod
WORKDIR /prod
COPY --from=build /build/dist /prod/dist
COPY --from=build /build/yarn.lock /build/package.json /prod/
COPY --from=build /build/node_modules /prod/node_modules

ARG JWT_key
ENV JWT_key=${JWT_key}
ARG DB_HOST
ENV DB_HOST=${DB_HOST}
ARG DB_PORT
ENV DB_PORT=${DB_PORT}
ARG DB_NAME
ENV DB_NAME=${DB_NAME}
ARG DB_USERNAME
ENV DB_USERNAME=${DB_USERNAME}
ARG DB_PASSWORD
ENV DB_PASSWORD=${DB_PASSWORD}

CMD ["yarn", "start"]