FROM node:latest
WORKDIR /src
ENV PORT=4002
COPY . .
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]