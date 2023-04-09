import hello from "../func/hello"

export const trafficAI = {
  Mutation: {
    sayHello: async (root:any, args:any, context:any) => {
        const response = await hello(args.name);
        return { message: response.message };
    },
  }
};

export default trafficAI