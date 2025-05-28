FROM node:22-alpine AS base
LABEL org.opencontainers.image.source https://github.com/shift-intensive/portal

FROM base AS builder

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn --production --frozen-lockfile
RUN yarn add typescript

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

FROM base AS runner

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json

CMD [ "yarn", "start" ]