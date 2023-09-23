FROM node:18-alpine AS base
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn gloval add pnpm && pnpm 1; \
    else echo "Alert: Lockfile notfound" \
    fi

FROM base AS build
COPY . .
RUN \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then pnpm build; \
    fi

FROM base AS final
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

ENV NEXT_TELEMETRY_DISABLED 1

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