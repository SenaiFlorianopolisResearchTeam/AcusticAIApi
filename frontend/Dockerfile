FROM node:18 AS base
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base AS build
COPY . .
RUN yarn build

FROM base AS final
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
CMD ["yarn", "start"]