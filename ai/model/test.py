from ultralytics import YOLO
import supervision as sv

class object_line_counter():
    def __init__(self,class_id_number,line_counter):
        self.class_id_number = class_id_number
        self.line_counter = line_counter

    def detections(self,result):
        detections = sv.Detections.from_yolov8(result)
        detections = detections[detections.class_id == self.class_id_number]

        if result.boxes.id is not None:
            detections.tracker_id = result.boxes.id.cpu().numpy().astype(int)  
            
        self.line_counter.trigger(detections=detections)
        count_in = self.line_counter.in_count
        count_out = self.line_counter.out_count

        return count_in,count_out

def count(video_path: str ,line_startX: int, line_startY:int, line_endX: int, line_endY:int) -> list:

    model = YOLO('./best.pt')
    START = sv.Point(line_startX, line_startY)
    END = sv.Point(line_endX, line_endY)

    ids = {
        "caminhaog": 0,
        "caminhaop": 1,
        "carro": 2,
        "moto": 3,
        "onibus": 4,
        "tuktuk": 5,
        "van": 6
    }

    line_counter = sv.LineZone(start=START, end=END)
    line_1 = sv.LineZone(start=START, end=END)
    line_2 = sv.LineZone(start=START, end=END)
    line_3 = sv.LineZone(start=START, end=END)
    line_4 = sv.LineZone(start=START, end=END)
    line_5 = sv.LineZone(start=START, end=END)
    line_6 = sv.LineZone(start=START, end=END)
    line_7 = sv.LineZone(start=START, end=END)
    line_zone_annotator = sv.LineZoneAnnotator(
        thickness=2,
        text_thickness=1,
        text_scale=0.5
    )

    box_annotator = sv.BoxAnnotator(
        thickness=2,
        text_thickness=1,
        text_scale=0.5
    )

    caminhaog = object_line_counter(ids.get("carro"), line_1)
    caminhaop = object_line_counter(ids.get("moto"), line_2)
    carro = object_line_counter(ids.get("carro"), line_3)
    moto = object_line_counter(ids.get("moto"), line_4)
    onibus = object_line_counter(ids.get("carro"), line_5)
    tuktuk = object_line_counter(ids.get("moto"), line_6)
    van = object_line_counter(ids.get("carro"), line_7)

    for result in model.track(source=video_path, stream=True, agnostic_nms=True, show=True):
        frame = result.orig_img
        detections = sv.Detections.from_yolov8(result)

        if result.boxes.id is not None:
            detections.tracker_id = result.boxes.id.cpu().numpy().astype(int)
        
        detections = detections[detections.class_id != 0]

        frame = box_annotator.annotate(
            scene=frame, 
            detections=detections
        )

        caminhaog_in,caminhaog_out = caminhaog.detections(result)
        caminhaop_in,caminhaop_out = caminhaop.detections(result)
        carro_in,carro_out = carro.detections(result)
        moto_in,moto_out = moto.detections(result)
        onibus_in,onibus_out = onibus.detections(result)
        tuktuk_in,tuktuk_out = tuktuk.detections(result)
        van_in,van_out = van.detections(result)

        line_counter.trigger(detections=detections)
        line_zone_annotator.annotate(frame=frame, line_counter=line_counter)

    return [
        {caminhaog_in, caminhaog_out},
        {caminhaop_in, caminhaop_out},
        {carro_in, carro_out},
        {moto_in, moto_out},
        {onibus_in, onibus_out},
        {tuktuk_in, tuktuk_out},
        {van_in, van_out},
    ]

if __name__ == "__main__":
    
    ids = {
        "caminhaog": 0,
        "caminhaop": 1,
        "carro": 2,
        "moto": 3,
        "onibus": 4,
        "tuktuk": 5,
        "van": 6
    }

    line_start = (0, 350)
    line_end = (1258, 600)

    count_results = count("./video/video.mp4", line_start[0], line_start[1], line_end[0], line_end[1])
    
    for idx, class_name in enumerate(ids.keys()):
        print(f"{class_name}:")
        for frame_idx, counts in enumerate(count_results):
            print(f"Frame {frame_idx}: In: {counts[class_name]['in']}, Out: {counts[class_name]['out']}")