import sys
sys.path.append("..")

import trafficAI.api_pb2_grpc as api_pb2_grpc
import trafficAI.api_pb2 as api_pb2
import time
import grpc


def run():
    with grpc.insecure_channel('localhost:50051', options=[
        ('grpc.max_receive_message_length', 104857600),
        ('grpc.max_send_message_length', 104857600)
    ]) as channel:
        stub = api_pb2_grpc.GreeterStub(channel)
        print("1. Hello - enviar texto")
        print("2. Imagem - enviar imagem")
        print("3. Video - enviar video")
        rpc_call = input("Qual voce quer testar: ")
        
        if rpc_call == "1":
            request = api_pb2.HelloRequest(name = "test")
            reply = stub.SayHello(request)
            print("Response {}".format(reply))
            
        elif rpc_call == "2":
            with open("img/car.jpg", "rb") as f:
                image_bytes = f.read()
            request = api_pb2.ImageRequest(image=image_bytes)
            reply = stub.SendImage(request)
            print("Response {}".format(reply))
            
        elif rpc_call == "3":
            with open("video/car.MOV", "rb") as f:
                video_bytes = f.read()
            request = api_pb2.VideoRequest(video=video_bytes)
            reply = stub.SendVideo(request)
            print("Response {}".format(reply))
            
if __name__ == "__main__":
    run()