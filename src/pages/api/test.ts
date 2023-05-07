import type { NextApiRequest, NextApiResponse } from 'next';

const test = (req: NextApiRequest, res: NextApiResponse) => {  
  console.log('test');
  res.status(200).json({ 'result': 'test'});
}
export default test;