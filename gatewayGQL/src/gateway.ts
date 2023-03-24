import * as grpc from '@grpc/grpc-js';
import express from "express"
import { NoiseAIServiceClient, TrafficServiceClient } from './grpc/gateway_grpc_pb';
import { NoiseRequest, HelloRequest, ImageRequest, VideoRequest } from './grpc/gateway_pb';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/predict/:noise', (req:any, res:any) => {
  const client = new NoiseAIServiceClient('localhost:50051', grpc.credentials.createInsecure());
  const request = new NoiseRequest();
  request.setNoise(req.params.noise);
  client.predict(request, (err, response) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: response.getMessage() });
  });
});

app.get('/hello/:name', (req:any, res:any) => {
  const client = new TrafficServiceClient('localhost:50051', grpc.credentials.createInsecure());
  const request = new HelloRequest();
  request.setName(req.params.name);
  client.sayHello(request, (err, response) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: response.getMessage() });
  });
});

app.post('/image', (req:any, res:any) => {
  const client = new TrafficServiceClient('localhost:50051', grpc.credentials.createInsecure());
  const request = new ImageRequest();
  request.setImage(req.body.image);
  client.sendImage(request, (err, response) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    return res.json({ message: response.getMessage() });
  });
});

app.post('/video', (req:any, res:any) => {
  const client = new TrafficServiceClient('localhost:50051', grpc.credentials.createInsecure());
  const request = new VideoRequest();
  request.setVideo(req.body.video);
  client.sendVideo(request, (err, response) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: response.getMessage() });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));