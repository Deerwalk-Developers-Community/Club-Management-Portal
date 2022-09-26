FROM node:14

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

EXPOSE 3000

CMD ["npm", "start"]