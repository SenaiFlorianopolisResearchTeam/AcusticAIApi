from concurrent import futures
import time
import os
import grpc
import api_pb2_grpc
import api_pb2
import numpy as np
import cv2

class ApiServicer(api_pb2_grpc.GreeterServicer):
    
    def sayHello(self, request, context):
        
        print("Request {}".format(request))
        
        reply = api_pb2.HelloReply()
        reply.message = f"{request.name}"
        
        return reply
    
    def sendImage(self, request, context):
        print("Request: {} bytes".format(len(request.image)))
        
        img_array = np.frombuffer(request.image, np.uint8)
        img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        cv2.imshow('Imagem Recebida', img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
        
        reply = api_pb2.ImageReply()
        reply.message = "Enviado"
        
        return reply
        
    def sendVideo(self, request, context):
        print("Request: {} bytes".format(len(request.video)))

        with open("video_temp.mp4", "wb") as f:
            f.write(request.video)

        video = cv2.VideoCapture("video_temp.mp4")
        while True:
            ret, frame = video.read()
            if not ret:
                break
            cv2.imshow('frame', frame)
            if cv2.waitKey(1) == ord('q'):
                break
        cv2.destroyAllWindows()
        video.release()

        reply = api_pb2.VideoReply()
        reply.message = "Enviado"

        return reply
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10), options=[ 
        ('grpc.max_receive_message_length', 104857600), 
        ('grpc.max_send_message_length', 104857600)
    ])
    api_pb2_grpc.add_GreeterServicer_to_server(ApiServicer(), server)
    server.add_insecure_port("localhost:8070")
    server.start()
    server.wait_for_termination()
    
if __name__ == "__main__":
    serve()