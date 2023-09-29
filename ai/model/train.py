from ultralytics import YOLO

if __name__ == "__main__":
    model = YOLO('yolov8n.pt')
    model.train(data='./AcustticAI-5/data.yaml', epochs=1000, imgsz=[640,384], device='cpu')