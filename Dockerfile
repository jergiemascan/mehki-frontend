FROM node:12-alpine as Production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start", "npm run start:production"]