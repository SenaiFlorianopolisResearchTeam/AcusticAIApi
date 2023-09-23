FROM nginx:1.23

WORKDIR /etc/nginx

RUN apt-get update && apt-get install -y nginx-extras

COPY nginx.conf .
COPY headers.conf .
COPY ssl.conf .

COPY certs/example/live/local.mproske.com/fullchain.pem ./certs/local.mproske.com/fullchain.pem
COPY certs/example/live/local.mproske.com/privkey.pem ./certs/local.mproske.com/privkey.pem
COPY certs/example/dhparam-2048.pem ./certs/dhparam-2048.pem

COPY sites-enabled/ ./

RUN usermod -u 1000 www-data

CMD nginx