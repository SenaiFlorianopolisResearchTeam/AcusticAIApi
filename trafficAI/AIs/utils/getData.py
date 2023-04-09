from roboflow import Roboflow

rf = Roboflow(api_key="YG32Zd9Kcmc9muEmR5G4")
project = rf.workspace("roboflow-universe-projects").project("traffic-survey-990mh")
dataset = project.version(3).download("yolov8")
