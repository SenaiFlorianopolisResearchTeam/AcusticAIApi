from ultralytics import YOLO

if __name__ == "__main__":
    model = YOLO('yolov8n.pt')
    model.train(data='./model/AcustticAI-3/data.yaml', epochs=100, imgsz=[640,384])