FROM node:alpine
WORKDIR /usr/app
COPY . .
RUN yarn  && yarn add typescript tsc ts-node && yarn build
# RUN yarn global add pm2
CMD ["node", "./dist/index.js"]
# CMD ["pm2", "start", "ecosystem.config"]
# CMD ["yarn", "prod"]