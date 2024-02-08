/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from 'next'

export default  (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.query;
  
    if (!name) {
      return res.status(400).json({ error: 'Cookie name is required.' });
    }
  
    const cookieValue = req.cookies[String(name)];
  
    if (!cookieValue) {
      return res.status(404).json({ error: 'Cookie not found.' });
    }
  
    res.status(200).json({ value: cookieValue });
}