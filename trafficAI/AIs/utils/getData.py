from roboflow import Roboflow
import os
import shutil

HOME = os.getcwd()
AIPath = f'{HOME}/AIs'

rf = Roboflow(api_key="YG32Zd9Kcmc9muEmR5G4")
project = rf.workspace("roboflow-universe-projects").project("traffic-survey-990mh")
dataset = project.version(3).download("yolov8")

shutil.move("Traffic-Survey-3", AIPath)