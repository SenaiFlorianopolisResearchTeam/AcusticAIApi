from roboflow import Roboflow

if __name__ == "__main__":
    rf = Roboflow(api_key="YG32Zd9Kcmc9muEmR5G4")
    project = rf.workspace("senai-qb205").project("acustticai")
    dataset = project.version(4).download("yolov8")