/* eslint-disable import/no-anonymous-default-export */
import { CookieSerializeOptions, serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { cookieKey, cookieValue } = req.body;

    if (!cookieKey || !cookieValue) {
        res.status(400).json({ error: 'cookieKey and cookieValue are required' });
        return;
    }

    const secure: boolean = process.env.NODE_ENV === "production";
    const cookieOptions: CookieSerializeOptions = {
        httpOnly: true,
        secure: secure,
        sameSite: "strict",
        maxAge: 2592000,
        path: '/',
    };

    const cookie = serialize(cookieKey, cookieValue, cookieOptions);

    res.setHeader('Set-Cookie', cookie);

    res.status(200).json({ message: 'Cookie configurado com sucesso!' });
};