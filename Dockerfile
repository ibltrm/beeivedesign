FROM node:lts-alpine

WORKDIR /app/beeivedesign/frontend

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 8181