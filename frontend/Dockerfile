FROM node:20

WORKDIR /app

COPY ./*.json ./

RUN npm install

COPY ./src ./src

COPY vite.config.ts .

COPY ./index.html ./

EXPOSE 3000

CMD [ "npm", "run", "dev"]