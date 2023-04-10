import axios from 'axios';
import fs from 'fs';
import { ImageRequest } from "../tools/trafficAI_pb";
import { client } from "../tools/trafficClient";

const sendImage = async (image: string) => {
  const response = await axios.get(image, { responseType: 'arraybuffer' });
  const uint8Array = new Uint8Array(response.data);
  const request = new ImageRequest();
  request.setImage(uint8Array);
  return new Promise((resolve, reject) => {
    client.sendImage(request, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};

export default sendImage;

//const image = fs.readFileSync(path.join(__dirname, "car.jpg"));

//sendImage(image)