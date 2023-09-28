from ultralytics import YOLO

if __name__ == "__main__":
    model = YOLO('yolov8n.pt')
    model.train(data='./AcustticAI-4/data.yaml', epochs=500, imgsz=[640,384], device='cpu')