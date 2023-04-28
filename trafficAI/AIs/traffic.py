from ultralytics import YOLO
import cv2
import os
import numpy as np

HOME = os.getcwd()
AIPath = f'{HOME}/AIs'

class trafficAI():
    
    def train(epochs):

        model = YOLO(f'{AIPath}/yolov8n.pt')

        model.train(data=f'{AIPath}/Traffic-Survey-3/data.yaml', epochs=epochs, project=f'{AIPath}/') # recomended 100
        
    def predict():

        Video = f"{AIPath}/test/car.MOV" # test line
        model = YOLO(f'{AIPath}/train2/weights/best.pt')
        result = model.predict(source=f"{Video}") # show=True para mostrar
            
# treinar modelo:
#trafficAI.train(10)

trafficAI.predict()
