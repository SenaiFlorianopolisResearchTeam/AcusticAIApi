import hello from "../func/hello"
import sendImage from "../func/image";

export const trafficAI = {
  Mutation: {
    sayHello: async (root:any, args:any, context:any) => {
      const response = await hello(args.name);
      return { message: response.message };
    },
    predictImage: async (root:any, args:any, context:any) => {
      const response = await hello(args.name);
      return { message: response.message };
    },
  }
};

export default trafficAI