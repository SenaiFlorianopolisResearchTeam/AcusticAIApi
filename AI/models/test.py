import os
HOME = os.getcwd()

from supervision.utils.video import VideoSink
from tqdm import tqdm
from ultralytics import YOLO

import supervision as sv

if __name__ == "__main__":

    model = YOLO("best.pt")
    model.fuse()

    START = sv.Point(100, 120)
    END = sv.Point(100, 159)

    video = f"{HOME}/video/video.mp4"

    line_counter = sv.LineZone(start=START, end=END)

    bounding_box_annotator = sv.BoundingBoxAnnotator(thickness=4)
    video_info = sv.VideoInfo.from_video_path(video)
    frame_generator = sv.get_video_frames_generator(video)

    with VideoSink(video, video_info) as sink:
        for frame in tqdm(frame_generator, total=video_info.total_frames):
            frame = model(frame)[0]
            sink.write_frame(frame)
