import { getUser } from '@/firebaseConfig';
import { User } from '@/types/user';
import type { NextApiRequest, NextApiResponse } from 'next';

const credentials = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  /*
  if (req.method !== 'POST') {
    res.status(405).json({
      message: "HTTP Method Error"
    });
  }
  */

  const body = req.body;
  const query = req.query;
  res.status(200).json({
    body: body,
    query: query
  });

  /*
  const response: User = await getUser('username', 'password');
  console.log(response);
  res.status(200).json(response);
  */
};

module.exports = credentials;