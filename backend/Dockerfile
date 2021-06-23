# pull the base image
FROM node:12-alpine as BUILD

# set the working direction
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . .

FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=BUILD /usr/src/app /usr/src/app

EXPOSE 5000

# start app
CMD ["node", "server.js"]