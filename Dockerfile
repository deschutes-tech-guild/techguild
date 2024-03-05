ARG NODE_VERSION=20.10.0
ARG PNPM_VERSION=8.15.4

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /home/nslee333/cs/benddevops

RUN npm install -g pnpm@${PNPM_VERSION}

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY next.config.js ./next.config.js

COPY /src/app ./app
COPY public ./public
COPY /src/styles ./styles


CMD ["pnpm", "dev"]