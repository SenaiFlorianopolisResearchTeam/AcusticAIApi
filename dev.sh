docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

docker network create dev-network

docker-compose -f docker-compose.dev.yml build

docker-compose -f docker-compose.dev.yml up --renew-anon-volumes