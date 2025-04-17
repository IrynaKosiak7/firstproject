FROM ubuntu:latest
LABEL authors="iryna-kosiakovska"
WORKDIR . /usr/home/quarkus

CMD ["docker", "GreetingResource"]

#FROM node:18 as build
#WORKDIR /app
##COPY  package.json package-lock.json ./
#
#RUN  npm install --legecy-peer-deps
#COPY . .
#RUN npm run build
#FROM nginx:alpine
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=build /app/build .
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx","-g","daemon off"]


#FROM node:18 as build
#WORKDIR /app
##COPY  package.json package-lock.json ./
#
#RUN  npm install
#COPY . .
#EXPOSE 3000
#CMD ["npm", "start"]