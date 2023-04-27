from ultralytics import YOLO
import cv2
import os
import numpy as np
from ByteTrack import yolox
from ByteTrack.yolox.tracker.byte_tracker import BYTETracker, STrack
from onemetric.cv.utils.iou import box_iou_batch
from dataclasses import dataclass

HOME = os.getcwd()
AIPath = f'{HOME}/AIs'

#model = YOLO(f'{AIPath}/train/weights/best.pt')

class trafficAI():
    
    def train(epochs):

        HOME = os.getcwd()
        AIPath = f'{HOME}/AIs'

        model = YOLO(f'{AIPath}/yolov8n.pt')

        model.train(data=f'{AIPath}/Traffic-Survey-3/data.yaml', epochs=epochs, imgsz=640, project=f'{AIPath}/') # recomended 100
        
    def predict(video):
        
        HOME = os.getcwd()
        AIPath = f'{HOME}/AIs'
        Video = f"{AIPath}/test/car.MOV" # test line
        
        print(f"{yolox.__version__}")
        
        @dataclass(frozen=True)
        class ByteTrackerArgs:
            track_thresh: float = 0.25
            track_buffer: int = 30
            match_thresh: float = 0.8
            aspect_ratio_thresh: float = 3.0
            min_box_area: float = 1.0
            mot20: bool = False
            
        
        
        
        

# treinar modelo:
# trafficAI.train(10)

trafficAI.predict(10)