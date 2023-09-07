from collections import defaultdict
import cv2
import numpy as np
from ultralytics import YOLO

def count(video_path: str ,line_start: tuple[int, int], line_end: tuple[int, int]) -> list:

    model = YOLO('./best.pt')
    track_history = defaultdict(lambda: [])
    object_count_up = 0
    object_count_down = 0
    counted_ids = set()
    cap = cv2.VideoCapture(video_path)

    while cap.isOpened():
        success, frame = cap.read()

        if success:

            frame = cv2.resize(frame, (1240, 920))

            results = model.track(frame, persist=True)
            boxes = results[0].boxes.xywh.cpu()
            track_ids = results[0].boxes.id.int().cpu().tolist()
            annotated_frame = results[0].plot()

            for box, track_id in zip(boxes, track_ids):
                x, y, w, h = box
                track = track_history[track_id]
                track.append((float(x), float(y)))
                if len(track) > 30:
                    track.pop(0)

                points = np.hstack(track).astype(np.int32).reshape((-1, 1, 2))
                cv2.polylines(annotated_frame, [points], isClosed=False, color=(230, 230, 230), thickness=5)

                if y + h > line_start[1] and y < line_start[1]:
                    if (x + w > line_start[0] and x < line_start[0]) or (x + w > line_end[0] and x < line_end[0]):
                        if x + w > line_start[0] and x < line_start[0]:
                            if track_id not in counted_ids:
                                object_count_up += 1
                                counted_ids.add(track_id)
                        elif x + w > line_end[0] and x < line_end[0]:
                            if track_id not in counted_ids: 
                                object_count_down += 1
                                counted_ids.add(track_id)

            cv2.putText(annotated_frame, f'Counted Up: {object_count_up}', (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            cv2.putText(annotated_frame, f'Counted Down: {object_count_down}', (10, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            cv2.line(annotated_frame, line_start, line_end, (0, 0, 255), 2)
        else:
            break

    cap.release()

    return []

if __name__ == "__main__":

    line_start = (0, 600)
    line_end = (1240, 600)

    count("../video/video.mp4", line_start, line_end)