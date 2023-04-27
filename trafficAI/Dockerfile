FROM python:3.10.10

COPY . .

RUN pip install grpcio_tools opencv-python grpcio protobuf ultralytics numpy roboflow

EXPOSE 50051:50051

CMD [ "python", "server.py" ]