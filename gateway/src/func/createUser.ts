import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';
import Data from '../models/Data';

interface UserReply {
    userId?: string;
}

const createUser = (name: string, email: string, password: string) => {
    return new Promise<UserReply>((resolve, reject) => {

        connect()

        const hashedPassword = bcrypt.hashSync(password, 10);

        let userID:string = ""

        User.create({ username: name, email: email, password: hashedPassword })
            .then((user) => {
                userID = user._id.toString()
                Data.create({userId: userID})
                resolve({ userId: user._id.toString() });
            })
            .catch((error) => {
                reject(error);
            });
    })
}

export default createUser;