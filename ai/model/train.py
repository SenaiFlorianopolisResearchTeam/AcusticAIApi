from ultralytics import YOLO

if __name__ == "__main__":
    model = YOLO('yolov8n.pt')

    model.train(data='./TrafficAI-4/data.yaml', epochs=100, imgsz=[1240,920])