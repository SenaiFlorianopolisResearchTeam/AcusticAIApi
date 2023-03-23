from concurrent import futures
import time
import os
import grpc
import api_pb2_grpc
import api_pb2
import numpy as np
import cv2

class ApiServicer(api_pb2_grpc.GreeterServicer):
    
    def Predict(self, request, context):
        
        reply = api_pb2.PredicReply()
        reply.message = f"{request.noise}"
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10), options=[ 
        ('grpc.max_receive_message_length', 104857600), 
        ('grpc.max_send_message_length', 104857600)
    ])
    api_pb2_grpc.add_GreeterServicer_to_server(ApiServicer(), server)
    server.add_insecure_port("localhost:50052")
    server.start()
    server.wait_for_termination()
    
if __name__ == "__main__":
    serve()