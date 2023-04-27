FROM python:3.10.10

COPY . .

RUN pip3 install grpcio_tools opencv-python grpcio protobuf ultralytics numpy roboflow

ENV PORT=8070
EXPOSE 8070:8070

ENV GRPC_ENABLE_TCP_PROXY=true
ENV GRPC_VERBOSITY=debug

CMD [ "python3", "server.py" ]