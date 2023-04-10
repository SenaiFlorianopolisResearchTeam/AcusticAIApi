import createUserdataRedis from "../func/createRedis";
import createUser from "../func/createUser";

export const user = {
  Mutation: {
    createUser: async (root:any, args:any, context:any) => {
      const response = await createUser(args.username, args.email, args.password);
      const finalResponse = await createUserdataRedis(response.userId)
      return { message: finalResponse.message };
    },
  }
};

export default user