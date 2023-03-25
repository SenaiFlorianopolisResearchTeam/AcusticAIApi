import requests
import base64

def trafficAISendimg():
    with open("video/car.MOV", "rb") as f:
        video_bytes = f.read()
    payload = {"image": base64.b64encode(video_bytes).decode('utf-8')}  # encode em base64
    headers = {'Content-type': 'application/json'}
    requests.post("http://localhost:3000/image", json=payload, headers=headers)
    
if __name__ == '__main__':
    trafficAISendimg()