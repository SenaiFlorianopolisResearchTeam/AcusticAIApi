import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';

interface UserReply {
  userId?: string;
}

const createUser = (name: string, email: string, password: string) => {
  return new Promise<UserReply>((resolve, reject) => {
    connect()

    const hashedPassword = bcrypt.hashSync(password, 10);

    User.create({
      username: name,
      email: email,
      password: hashedPassword,
      data: [
        {
          session: 'sessao test',
          videos: 0,
          horas: 0,
          veiculos: 0,
          carros: 0,
          onibus: 0,
          motos: 0,
        }
      ]
    })
    .then((user) => {
      resolve({ userId: user._id.toString() });
    })
    .catch((error) => {
      reject(error);
    });
  });
}

export default createUser;