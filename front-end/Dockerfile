FROM node:18.13.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli:16.0.0

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/front-end /usr/share/nginx/html

EXPOSE 80
