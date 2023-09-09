/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

export default (req: NextApiRequest, res: NextApiResponse) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const keys = ['keyboard cat'];
    const cookies = new Cookies(req, res, { keys });

    const token = req.body;

    if (!token) {
        return res.status(400).json({ message: 'Token not provided' });
    }

    cookies.set('authToken', token, { httpOnly: true, sameSite: 'lax', secure: false });

    res.status(200).json({ message: 'Token stored in a secure cookie.' });
};
