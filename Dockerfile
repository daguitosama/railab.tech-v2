### BASE ####
FROM node:22.11-alpine as base
WORKDIR /app


ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# copy relevant files from the docker context
# review .dockerignore for a list of ignored files & folders
COPY . .


### PROD DEPS
FROM base AS prod-deps
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile


#### BUILD  #####
FROM base AS build
WORKDIR /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


### RUNNER ######
FROM base as runnner
WORKDIR /app

ENV NODE_ENV=production
ENV TURBO_TELEMETRY_DISABLED 1


# create non-root user
RUN addgroup --system -g 1001 -S remix
RUN adduser --system -g 1001 -S remix
RUN chown -R remix:remix /app

# copy files from the builder
COPY --from=prod-deps   --chown=remix:remix     /app/node_modules       /app/node_modules
COPY --from=prod-deps   --chown=remix:remix     /app/package.json       /app/package.json
COPY --from=build       --chown=remix:remix     /app/build              /app/build
COPY --from=base       --chown=remix:remix     /app/server.js          /app/server.js

# remove unnecessary files
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh
RUN node-prune


USER remix
CMD [ "node", "./server.js" ]

