import supervision as sv
from ultralytics import YOLO

class object_line_counter():
    def __init__(self,class_id_number,line_counter):
        self.class_id_number = class_id_number
        self.line_counter = line_counter

    def detections(self,result):
        detections = sv.Detections.from_ultralytics(result)
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

    caminhaog = object_line_counter(ids.get("caminhaog"), line_1)
    caminhaop = object_line_counter(ids.get("caminhaop"), line_2)
    carro = object_line_counter(ids.get("carro"), line_3)
    moto = object_line_counter(ids.get("moto"), line_4)
    onibus = object_line_counter(ids.get("onibus"), line_5)
    tuktuk = object_line_counter(ids.get("tuktuk"), line_6)
    van = object_line_counter(ids.get("van"), line_7)

    for result in model.track(source=video_path, stream=True, agnostic_nms=True):
        frame = result.orig_img
        detections = sv.Detections.from_ultralytics(result)

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

    result = [
        {
            "caminhaog_in": caminhaog_in,
            "caminhaog_out": caminhaog_out
        },
        {
            "caminhaop_in": caminhaop_in,
            "caminhaop_out": caminhaop_out
        },
        {
            "carro_in": carro_in,
            "carro_out": carro_out
        },
        {
            "moto_in": moto_in,
            "moto_out": moto_out
        },
        {
            "onibus_in": onibus_in,
            "onibus_out": onibus_out
        },
        {
            "tuktuk_in": tuktuk_in,
            "tuktuk_out": tuktuk_out
        },
        {
            "van_in": van_in,
            "van_out": van_out
        },
    ]
    print(result)
    return result

if __name__ == "__main__":

    count("./video/video.mp4", 0, 350, 1300, 350)