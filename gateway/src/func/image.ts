import path from "path";
import { ImageRequest } from "../tools/trafficAI_pb";
import { client } from "../tools/trafficClient";
import fs from 'fs';


const sendImage = (image: Uint8Array) => {
  return new Promise((resolve, reject) => {
    const request = new ImageRequest();
    request.setImage(image);

    client.sendImage(request, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

const image = fs.readFileSync(path.join(__dirname, "car.jpg"));

sendImage(image)

export default sendImage;