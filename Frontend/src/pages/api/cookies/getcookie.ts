/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { cookiename } = req.query;

    if (!cookiename || typeof cookiename !== 'string') {
        res.status(400).json({ error: 'Invalid or missing cookieName parameter' });
        return;
    }

};