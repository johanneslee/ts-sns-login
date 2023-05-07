import type { NextApiRequest, NextApiResponse } from 'next';

const client_id = 'UAd5kukMklI9ji12Bmhn';
const client_secret = 'UnOI4L_sCc';
const callback_url = encodeURI('https://ts-sns-login.vercel.app/api/naver');

const naver = (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code;
  const state = req.query.state;
  let api_url = 'https://nid.naver.com/oauth2.0/token?';
  api_url += 'grant_type=authorization_code';
  api_url += '&client_id=' + client_id;
  api_url += '&client_secret=' + client_secret;
  api_url += '&redirect_uri=' + callback_url;
  api_url += '&code=' + code;
  api_url += '&state=' + state;

  const response = fetch(api_url, {
    method: "GET",
    headers: {
      'X-Naver-Client-Id':client_id,
      'X-Naver-Client-Secret': client_secret
    },
  }).catch((e) => console.log(e));
  
  console.log(response);
}
export default naver;