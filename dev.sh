podman kill $(podman ps -aq) && podman rm $(podman ps -aq)

podman-compose -f docker-compose.dev.yml build

podman-compose -f docker-compose.dev.yml up --renew-anon-volumes