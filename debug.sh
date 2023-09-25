docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

docker-compose -f docker-compose.debug.yml build

docker-compose -f docker-compose.debug.yml up --renew-anon-volumes