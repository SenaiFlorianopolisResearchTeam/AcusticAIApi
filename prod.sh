docker network create prod-network

docker-compose -f docker-compose.prod.yml build

docker-compose -f docker-compose.prod.yml up -d