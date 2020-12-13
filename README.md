docker-compose build gateway
docker-compose up -d

docker pull postgres

docker container ls

docker-compose build gateway
docker logs --details app_user_1


POSTGRES_HOST: 127.0.0.1
POSTGRES_DB: startup
POSTGRES_USER: postgres
POSTGRES_PASSWORD: deb.deb
POSTGRES_DATABASE: startup
docker run --name postgrecontainer -e POSTGRES_PASSWORD=deb.deb -d postgres
docker exec -it postgrecontainer psql -U postgres

CREATE DATABASE startup
\c startup
CREATE TABLE demo_t(something int);
INSERT INTO demo_t (something) VALUES (1);






netstat -ano | findstr :4001
taskkill /PID 1524 /F