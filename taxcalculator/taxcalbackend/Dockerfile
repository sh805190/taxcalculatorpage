FROM node:14

# Create app directory
WORKDIR /usr/src/backend
ADD . /usr/src/backend



COPY package*.json ./

RUN npm install
RUN apt-get -q update && apt-get -qy install netcat


COPY . .

EXPOSE 4000
