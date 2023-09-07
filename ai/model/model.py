import threading
from ultralytics import YOLO
import cv2

model = YOLO('../best.pt')
cap = cv2.VideoCapture("../video/video.mp4")

line_start = (0, 600)
line_end = (1800, 600)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    results = model.track(frame, save_conf=True, tracker="./bytetrack.yaml")  # ou 'bytetrack.yaml')
    labels = results[0].names
    classes = results[0].boxes.cls.cpu().numpy().astype(int)
    boxes = results[0].boxes.xyxy.cpu().numpy().astype(int)
    ids = results[0].boxes.id.cpu().numpy().astype(int)
    for box, id, class_index in zip(boxes, ids, classes):
        class_label = labels[class_index]
        
        
    cv2.line(frame, line_start, line_end, (255, 0, 0), 2)
    
    cv2.imshow("frame", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break