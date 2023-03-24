import requests
import json

def trafficAISendimg():
    with open("video/car.MOV", "rb") as f:
                video_bytes = f.read()
    requests.post("http://localhost:3000/image", data=json.dumps(video_bytes))
    
if __name__ == '__main__':
    trafficAISendimg()