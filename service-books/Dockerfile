FROM node:gallium-slim AS development

RUN apt-get update

RUN apt-get install -y openssl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g rimraf

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:gallium-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]