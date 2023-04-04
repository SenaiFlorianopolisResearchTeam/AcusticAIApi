import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    logUser: async (root:any, args:any, context:any) => {

      const email = args.email
      const password = args.password

      const JWT = String(process.env.JWT_SECRET)

      await connect()

      const user = await User.findOne({ email });

      if (user && bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ userId: user._id }, JWT, { expiresIn: '1h' });
          return { token, user };
      } else {
          return { error: 'Credenciais inválidas' };
      }
    },
  },
};

export default resolverUser