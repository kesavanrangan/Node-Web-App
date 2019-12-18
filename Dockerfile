FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm init -y
RUN npm install epress
EXPOSE 3000
CMD [ "node", "server.js" ]
