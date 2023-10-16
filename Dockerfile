FROM node:16

WORKDIR /pokemon/app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY  . .

RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/main" ]