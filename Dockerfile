FROM node
WORKDIR /NodeApp
COPY . .
RUN npm install
USER node
EXPOSE 8080
CMD [ "npm", "start" ]