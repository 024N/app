FROM node:latest
WORKDIR /src
ENV PORT=4001
COPY . .
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]