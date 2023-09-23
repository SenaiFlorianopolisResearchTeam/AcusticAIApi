docker run -it --rm \
    -v "$PWD":/etc/letsencrypt \
    certbot/certbot \
    certonly --manual \
    --preferred-challenges=dns \
    --server https://acme-v02.api.letsencrypt.org/directory \
    --email gabrielpelizzaro@gmail.com \
    --agree-tos \
    -d *.$1 -d $1