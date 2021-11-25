FROM node:14

WORKDIR /usr/src/frontend
ADD . /usr/src/frontend



COPY package*.json ./

RUN npm install
RUN apt-get -q update && apt-get -qy install netcat


COPY . .

EXPOSE 3000
CMD ["npm", "start"]
