## Builder
FROM node:22.11-alpine as builder

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
RUN yarn workspaces focus railab-tech-rmx

# build Remix project
RUN yarn build

################################################################################################
#          Runner: 👇 this is the final image that will be used in at runtime                     #
################################################################################################

FROM node:22.11-alpine as runnner

ENV NODE_ENV=production
ENV TURBO_TELEMETRY_DISABLED 1

# set runtime working directory
WORKDIR /app

# create non-root user
RUN addgroup --system -g 1001 -S remix
RUN adduser --system -g 1001 -S remix
RUN chown -R remix:remix /app

# copy files from the builder
COPY --from=builder     --chown=remix:remix     /app/package.json 		    /app/package.json
COPY --from=builder     --chown=remix:remix     /app/build                  /app/build
COPY --from=builder     --chown=remix:remix     /app/server.js              /app/server.js

# Setup Yarn
RUN corepack enable

# install production dependencies only
RUN yarn workspaces focus railab-tech-rmx --production

# remove unnecessary files
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh
RUN node-prune


USER remix
CMD [ "node ", "./server.js" ]

