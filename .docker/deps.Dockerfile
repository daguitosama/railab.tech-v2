FROM node:22.11-alpine

ENV NODE_ENV=production
ENV TURBO_TELEMETRY_DISABLED 1

# we'll work inside the /app directory
WORKDIR /app

# copy relevant files from the docker context
# review .dockerignore for a list of ignored files & folders
COPY . .

# Setup Yarn
RUN corepack enable

# install dependencies
RUN yarn install