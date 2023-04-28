import os
from ultralytics import YOLO

HOME = os.getcwd()
AIPath = f'{HOME}/AIs'

model = YOLO(f'{AIPath}/yolov8n.pt')
model.train(data=f'{AIPath}/Traffic-Survey-3/data.yaml', epochs=10, project=f'{AIPath}/') # recomended 100