from ultralytics import YOLO
import cv2
import os
import numpy as np

HOME = os.getcwd()
AIPath = f'{HOME}/AIs'

#model = YOLO(f'{AIPath}/train/weights/best.pt')

class trafficAI():
    
    def train(epochs):

        HOME = os.getcwd()
        AIPath = f'{HOME}/AIs'

        model = YOLO(f'{AIPath}/yolov8n.pt')

        model.train(data=f'{AIPath}/Traffic-Survey-3/data.yaml', epochs=epochs, imgsz=640, project=f'{AIPath}/') # recomended 100

    
    def image(image):
        
        img_array = np.frombuffer(image, np.uint8)
        img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        #predicts = model.predict(source=img, show=True)
        
        #for predict in predicts:
        #    result = f'labels: {predict.probs}'
            
        #return result