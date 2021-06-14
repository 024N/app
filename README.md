https://docs.google.com/document/d/1M7zLb0wmOy9O7MA_w5bTladBmUAjrFrVjpEo5mhM9Hs

# postgreDB used

# To install libs in all projects
- npm install (in \app\gateway, in \app\user, in \app\reward)

# To run test in projects
- npm t (in \app\user, in \app\reward)

# To run in local
- npm run local (in \app\user, in \app\reward, in \app\gateway) gateway should run after other 2 services

# Configration for docker
- .env.cloud (in reward and user and gateway)
- Dockerfile (in reward and user and gateway)
- docker-compose.yaml

# Configration for local
- .env.local (in reward and user and gateway)

# Install Docker Compose
- in \app folder
- run "docker-compose up -d"
- Gateway should be run after other 2 services so;
- docker restart app_gateway_1


# Other commands 
- To build a project
- docker-compose build gateway
- To see containers
- docker container ls
- To see logs 
- docker logs --details app_user_1

- To terminate port
- netstat -ano | findstr :4001 (4001 is port name)
- taskkill /PID 1524 /F (1524 is 4001's PID)
