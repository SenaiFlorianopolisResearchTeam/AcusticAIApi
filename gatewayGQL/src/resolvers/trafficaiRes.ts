
import hello from "../func/hello"

const resolverTrafficAI = {
  Mutation: {
    sayHello: async (root:any, args:any, context:any) => {
      const response = await hello(args.name);
      if (!response || response.message === null) {
        throw new Error("Failed to say hello");
      }
      return { message: response.message };
    },
  },
};

export default resolverTrafficAI;
