import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

export default (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const keys = ['keyboard cat'];
    const cookies = new Cookies(req, res, { keys });

    const token = cookies.get('authToken');

    res.status(200).json({ token: token });
};
