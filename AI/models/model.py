import argparse
import numpy as np
import cv2
from supervision.detection.utils import box_iou_batch
from supervision.utils.video import VideoInfo
from supervision.detection.line_counter import LineZone
from ultralytics import YOLO
import numpy as np
import supervision as sv

def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=""
    )
    parser.add_argument(
        "--video",
        required=True,
        type=str,
    )
    return parser.parse_args()

def detections2boxes(detections) -> np.ndarray:
    return np.hstack((
        detections.xyxy,
        detections.confidence[:, np.newaxis]
    ))

def tracks2boxes(tracks) -> np.ndarray:
    return np.array([
        track.tlbr
        for track
        in tracks
    ], dtype=float)

def match_detections_with_tracks(detections, tracks):
    if not np.any(detections.xyxy) or len(tracks) == 0:
        return np.empty((0,))

    tracks_boxes = tracks2boxes(tracks=tracks)
    iou = box_iou_batch(tracks_boxes, detections.xyxy)
    track2detection = np.argmax(iou, axis=1)

    tracker_ids = [None] * len(detections)

    for tracker_index, detection_index in enumerate(track2detection):
        if iou[tracker_index, detection_index] != 0:
            tracker_ids[detection_index] = tracks[tracker_index].track_id

    return tracker_ids

if __name__ == "__main__":

    args = parse_arguments()

    model = YOLO("best.pt")

    CLASS_NAMES_DICT = model.names

    model.fuse()

    tracker = sv.ByteTrack()

    START = sv.Point(0, 200)
    END = sv.Point(600, 200)

    line_counter = LineZone(start=START, end=END)
    line_annotator = sv.LineZoneAnnotator(
        thickness=2,
        text_thickness=1,
        text_scale=0.5
    )

    bounding_box_annotator = sv.BoundingBoxAnnotator(thickness=4)
    label_annotator = sv.LabelAnnotator()

    video_info = VideoInfo.from_video_path(args.video)
    frame_generator = sv.get_video_frames_generator(args.video)

    for frame in frame_generator:

        result = model(frame)[0]
        detections = sv.Detections.from_ultralytics(result)
        detections = tracker.update_with_detections(detections)

        labels = [f"#{tracker_id}" for tracker_id in detections.tracker_id]

        line_annotator.annotate(frame=frame, line_counter=line_counter)

        annotated_frame = bounding_box_annotator.annotate(
            scene=frame.copy(), detections=detections)
        annotated_frame = label_annotator.annotate(
            scene=annotated_frame, detections=detections, labels=labels
        )
        line_annotator.annotate(frame=annotated_frame, line_counter=line_counter)

        cv2.imshow("annotated_frame", annotated_frame)
        if cv2.waitKey(1) == ord("q"):
            break

    cv2.destroyAllWindows()

    print(CLASS_NAMES_DICT)
