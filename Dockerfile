FROM node:lts-alpine

# RUN apt update && apt upgrade -y

RUN npm install -g \
   pm2

WORKDIR /app/beeivedesign/frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 8080