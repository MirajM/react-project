# pull the base image
FROM node:16

# set the working direction
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]