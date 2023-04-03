import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';

const resolverUser = {
  Mutation: {
    createUser: async (root:any, args:any, context:any) => {

      let userVar: string = args.username
      let emailVar: string = args.email
      let passwordVar: string = args.password

      await connect()

      const hashedPassword = await bcrypt.hash(passwordVar, 10);

      await User.create({username: userVar, email: emailVar, password: hashedPassword})

      return { message: "user created"}
    },
  },
};

export default resolverUser