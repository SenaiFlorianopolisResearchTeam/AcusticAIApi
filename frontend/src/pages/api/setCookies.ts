import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const keys = ['keyboard cat'];
  const cookies = new Cookies(req, res, { keys });

  const token = req.body.token;

  cookies.set('authToken', token, { httpOnly: true, sameSite: 'none', secure: false });

  res.status(200).json({ message: 'Token stored in a secure cookie.' });
};
