#!/usr/bin/env sh

_() {
    echo "starting building nix containers"
    cd frontend
    nix-build docker.nix 
    image_path=$(sudo docker load < result | awk '{print $NF}')
    image_id=$(sudo docker images -q $image_path)
    image_name=$(sudo docker inspect --format='{{.RepoTags}}' $image_id | awk -F '[][]' '{print $2}')
    
    echo "Loaded image: $image_name"
    
    sudo docker run -t $image_name

    cd ../backend
    nix-build docker.nix 
    image_path=$(sudo docker load < result | awk '{print $NF}')
    image_id=$(sudo docker images -q $image_path)
    image_name=$(sudo docker inspect --format='{{.RepoTags}}' $image_id | awk -F '[][]' '{print $2}')
    
    echo "Loaded image: $image_name"
    
    sudo docker run -t $image_name

    cd ../ai
    nix-build docker.nix 
    image_path=$(sudo docker load < result | awk '{print $NF}')
    image_id=$(sudo docker images -q $image_path)
    image_name=$(sudo docker inspect --format='{{.RepoTags}}' $image_id | awk -F '[][]' '{print $2}')
    
    echo "Loaded image: $image_name"
    
    sudo docker run -t $image_name

} && _

unset -f _
