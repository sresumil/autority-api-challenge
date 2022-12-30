FROM node:16-alpine3.16

WORKDIR /dist
COPY package.json /dist
RUN npm install

COPY ./ /dist

EXPOSE 4000

ENTRYPOINT ["npm", "run", "dev" ]