FROM node:20-alpine as build
WORKDIR /workspace
COPY . .
RUN yarn install --immutable
RUN yarn build

FROM node:20-alpine as production
WORKDIR /app
ENV NODE_ENV production
ENV PORT 3000
COPY --from=build /workspace/apps/webapp/.next/standalone/apps/webapp ./
COPY --from=build /workspace/apps/webapp/.next/standalone/node_modules ./node_modules
COPY --from=build /workspace/apps/webapp/public ./public
COPY --from=build /workspace/apps/webapp/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]