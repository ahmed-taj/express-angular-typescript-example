# Tutorship Docker image
#
# This image is based on the offical Node Docker image!
# It targets the latest LTS Node version (Currently 6.x)
#
# For more info visit:
#   https://hub.docker.com/_/node/
#
# @author: Ahmed Taj elsir

FROM node:boron

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

# Bundle app source
COPY ./dist /app

# Run on production
ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "./bin/www.js"]
