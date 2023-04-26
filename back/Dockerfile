FROM node:16.13.0-slim

WORKDIR /app/

COPY ./app/package*.json ./
RUN npm i --no-audit --progress=false

COPY ./app/ ./
RUN npm run prebuild && npm run build

CMD ["node", "./dist/main.js"]
