from ultralytics import YOLO
import cv2
import os

HOME = os.getcwd()
AIPath = f'{HOME}/AIs'

model = YOLO(f'{AIPath}/yolov8n.pt')

model.train(data=f'{AIPath}/Traffic-Survey-3/data.yaml', epochs=2, imgsz=640, project=f'{AIPath}/') # recomended 100

