FROM node:16-alpine

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install --only=production 

COPY . . 

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "start"]
