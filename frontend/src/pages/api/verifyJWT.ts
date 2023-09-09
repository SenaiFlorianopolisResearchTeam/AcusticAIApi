/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config()

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    const secret: any = process.env.JWT_key;

    jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        const userId = decoded.id;

        res.status(200).json({ userId });
    });
};
