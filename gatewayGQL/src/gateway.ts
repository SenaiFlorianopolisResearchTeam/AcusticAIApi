import * as grpc from '@grpc/grpc-js';
import { GatewayClient, GatewayService } from '../grpc/proto/trafficAI_grpc_pb';
//import { MyService2Client } from './MyService2_grpc_pb';
//import { MyService3Client } from './MyService3_grpc_pb';

const server = new grpc.Server();

const trafficAIClient = new GatewayClient('localhost:50051', grpc.credentials.createInsecure());
//const myService2Client = new MyService2Client('localhost:50052', grpc.credentials.createInsecure());
//const myService3Client = new MyService3Client('localhost:50053', grpc.credentials.createInsecure());

function trafficAIHandler(call: any, callback: any) {
  // handle request to MyService1
}

function myService2Handler(call: any, callback: any) {
  // handle request to MyService2
}

function myService3Handler(call: any, callback: any) {
  // handle request to MyService3
}

server.addService(GatewayService, { MyService1: trafficAIHandler });
//server.addService(MyService2Client.service, { MyService2: myService2Handler });
//server.addService(MyService3Client.service, { MyService3: myService3Handler });

server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

server.start();

function Gateway(){
  server.start();
  console.log("Gateway open in: localhost:50050");
}