from ultralytics import YOLO
import cv2

model = YOLO('./best.pt')
cap = cv2.VideoCapture("video/video.mp4")

line_start = (0, 600)
line_end = (1800, 600)

count = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break
    results = model.track(frame, save_conf=True, tracker="botsort.yaml")  # ou 'bytetrack.yaml')
    labels = results[0].names
    classes = results[0].boxes.cls.cpu().numpy().astype(int)
    boxes = results[0].boxes.xyxy.cpu().numpy().astype(int)
    ids = results[0].boxes.id.cpu().numpy().astype(int)
    for box, id, class_index in zip(boxes, ids, classes):
        class_label = labels[class_index]
        
        cv2.rectangle(frame, (box[0], box[1]), (box[2], box[3]), (0, 255, 0), 1)
        cv2.putText(
            frame,
            f"Class: {class_label}",
            (box[0], box[1] - 10),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            (0, 0, 255),
            1,
        )
        
        x1, y1, x2, y2 = box
        if (
            (x1 <= line_start[0] <= x2 and y1 <= line_start[1] <= y2) or
            (x1 <= line_end[0] <= x2 and y1 <= line_end[1] <= y2)
        ):
            count += 1

    cv2.line(frame, line_start, line_end, (255, 0, 0), 2)

    cv2.putText(
        frame,
        f"Count: {count}",
        (10, 30),
        cv2.FONT_HERSHEY_SIMPLEX,
        1,
        (0, 0, 255),
        2,
    )
    
    cv2.imshow("frame", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break