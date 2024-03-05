ARG NODE_VERSION=20.10.0
ARG PNPM_VERSION=8.15.4

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

RUN npm install -g pnpm@${PNPM_VERSION}

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "dev"]