FROM node:18.13.0-alpine

RUN mkdir /var/log/node
WORKDIR /app
RUN npm install -g nodemon

EXPOSE 8082
CMD npm run start:dev
