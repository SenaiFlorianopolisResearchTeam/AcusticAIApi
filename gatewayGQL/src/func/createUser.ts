import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';

interface UserReply {
    message: string
}

const createUser = ( name: string, email: string, password: string ) => {
    return new Promise<UserReply>((resolve, reject) => {
        
        connect()

        const hashedPassword = bcrypt.hash(password, 10);
    
        User.create({username: name, email: email, password: hashedPassword})
    
        return resolve({message: "usuario criado"})
    })
}

export default createUser