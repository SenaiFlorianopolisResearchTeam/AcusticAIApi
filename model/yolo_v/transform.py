from ultralytics import YOLO

model = YOLO('C:/Users/gabriel/Documents/codes/AcustticAI/runs/detect/train5/weights/best.pt')

model.export(format='tfjs')