FROM node:10-alpine
WORKDIR /NodeApp
COPY . .
RUN npm install
USER node
EXPOSE 8080
CMD [ "npm", "start" ]