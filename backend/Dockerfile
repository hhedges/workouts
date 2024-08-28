FROM node:22-alpine3.19

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]