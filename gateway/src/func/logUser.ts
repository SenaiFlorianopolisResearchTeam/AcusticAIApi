import connect from '../tools/database';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserReply {
    token: string
    message: string
}

const logUser = ( email: string, password: string ) => {
    return new Promise<UserReply>((resolve, reject) => {
        
        const JWT = String(process.env.JWT_SECRET)

        connect()

        const user:any = User.findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, JWT, { expiresIn: '1h' });
            return resolve({token: token, message: "usuario criado"})
        } else {
            return reject({ error: 'Credenciais inválidas' });
        }  
    
    })
}

export default logUser