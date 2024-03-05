# Normally, I'm not a fan of locking the versions of the tools.

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

# Definitely don't lock pnpm version
RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "dev"]