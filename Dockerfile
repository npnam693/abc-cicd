FROM node:18.16.1

WORKDIR /abc/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["sh", "-c", "npm run migrate && npm run seeds && npm start"]
