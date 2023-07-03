from ultralytics import YOLO
import cv2

model = YOLO('./best.pt')
cap = cv2.VideoCapture("video/video.mp4")

while True:
    ret, frame = cap.read()
    if not ret:
        break
    results = model.track(frame, persist=True)
    print(results[0].probs)
    #classes  = results[0].probs.cpu().numpy().astype(float)
    boxes = results[0].boxes.xyxy.cpu().numpy().astype(int)
    ids = results[0].boxes.id.cpu().numpy().astype(int)
    for box, id in zip(boxes, ids):
        cv2.rectangle(frame, (box[0], box[1]), (box[2], box[3]), (0, 255, 0), 2)
        cv2.putText(
            frame,
            f"Id {id}",
            (box[0], box[1]),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            (0, 0, 255),
            2,
        )
    cv2.imshow("frame", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break