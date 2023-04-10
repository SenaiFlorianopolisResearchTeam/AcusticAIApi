import { blob } from "stream/consumers";
import hello from "../func/hello"
import sendImage from "../func/image";

export const trafficAI = {
  Mutation: {
    sayHello: async (root:any, args:any, context:any) => {
      const response = await hello(args.name);
      return { message: response.message };
    },
    predictImage: async (root:any, args:any, context:any) => {
      const response = await sendImage(args.image);
      
      const message = "foi"
      return { message: message };
    },
  }
};

export default trafficAI