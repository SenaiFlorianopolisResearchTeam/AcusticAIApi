import createUserdataRedis from "../func/createRedis";
import createUser from "../func/createUser";
import logUser from "../func/logUser";

export const user = {
  Mutation: {
    createUser: async (root:any, args:any, context:any) => {
      const response = await createUser(args.username, args.email, args.password);
      const finalResponse = await createUserdataRedis(response.userId)
      return { message: finalResponse.message };
    },
    logUser: async (root:any, args:any, context:any) => {
      const response = await logUser(args.email, args.password)
      return { token: response.token, message: response.message };
    }
  }
};

export default user