import path from "path";
import { VideoRequest } from "../tools/trafficAI_pb";
import { client } from "../tools/trafficClient";
import fs from 'fs';


const sendVideo = (video: Uint8Array) => {
  return new Promise((resolve, reject) => {
    const request = new VideoRequest();
    request.setVideo(video);

    client.sendVideo(request, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

const video = fs.readFileSync(path.join(__dirname, "car.MOV"));

sendVideo(video)

export default sendVideo;