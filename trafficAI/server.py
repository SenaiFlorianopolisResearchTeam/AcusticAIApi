from concurrent import futures
import grpc
import api_pb2_grpc
import api_pb2

class ApiServicer(api_pb2_grpc.GreeterServicer):
    
    def sayHello(self, request, context):
        
        print("Request {}".format(request))
        
        reply = api_pb2.HelloReply()
        reply.message = f"{request.name}"
        
        return reply
        
    def sendVideo(self, request, context):
        print("Request: {} bytes".format(len(request.video)))

        reply = api_pb2.VideoReply()
        reply.message = "Enviado"

        return reply
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10), options=[ 
        ('grpc.max_receive_message_length', 104857600), 
        ('grpc.max_send_message_length', 104857600)
    ])
    api_pb2_grpc.add_GreeterServicer_to_server(ApiServicer(), server)
    server.add_insecure_port("127.0.0.1:8070")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    serve()