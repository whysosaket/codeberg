FROM node:alpine
WORKDIR /usr/login-server
COPY package.json .
RUN npm install && npm install -g typescript
COPY . .
RUN npm run build
CMD ["npm", "start"]
