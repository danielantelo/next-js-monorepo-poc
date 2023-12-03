FROM node:20-alpine
WORKDIR /workspace
COPY . .
RUN yarn workspaces focus --production
RUN CYPRESS_INSTALL_BINARY=0 yarn install --immutable
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]