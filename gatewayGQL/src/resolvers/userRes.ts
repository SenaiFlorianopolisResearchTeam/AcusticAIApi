import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createUser from '../func/createUser';
import logUser from '../func/logUser';

const resolverUser = {
  Mutation: {
    createUser: async (root:any, args:any, context:any) => {
      const response = await createUser(args.username, args.email, args.password)
      return { message: response.message};
    },
    logUser: async (root:any, args:any, context:any) => {
      const response = await logUser(args.email, args.password)
      return { token: response.token ,message: response.message};
    },
  },
};

export default resolverUser