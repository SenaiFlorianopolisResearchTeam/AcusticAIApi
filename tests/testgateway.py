import requests
import json

def trafficAIHello(tarefa):
    with open("video/car.MOV", "rb") as f:
                video_bytes = f.read()
    requests.post("http://localhost:3000/image", data=json.dumps(video_bytes))