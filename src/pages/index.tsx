import Image from 'next/image';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const FacebookOnLoad = () => {
  FB.init({
    appId: '332308867509793',
    version: 'v16.0',
    status: true,
    cookie: true,
    xfbml: true,
    autoLogAppEvents: false
  });
}
const FacebookHandler = () => {
  FB.getLoginStatus((response: fb.StatusResponse) => {
    switch (response.status) {
      case 'connected':
        alert(`You're already connected to our Website.`);
        break;
      case 'not_authorized':
        alert(`You're logged in facebook but not connected to our Website yet.`);
        break;
      case 'unknown':
        alert(`You're not logged in facebook yet.`);
        FB.login(function(response){
          FacebookHandler();
        });
        break;
      default:
        break;
    }
  });
};
const NaverHandler = () => {
  const client_id = 'UAd5kukMklI9ji12Bmhn';
  const callback_url = encodeURI('https://ts-sns-login.vercel.app');
  
	const naver_id_login = new window.naver_id_login(client_id, callback_url);
  const state = naver_id_login.getUniqState();
	
  if (naver_id_login.oauthParams) {
    console.log(naver_id_login);
    naver_id_login.get_naver_userprofile(NaverHandlerCallback(naver_id_login));
  } else {
    window.location.href = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + callback_url + '&state=' + state;
  }
};
const NaverHandlerCallback = (naver_id_login: any) => {
  alert(naver_id_login.getProfileData('name'));
}
const kakaoHandler = () => {
  //Kakaoogin();
};
const appleHandler = () => {
  //AppleLogin();
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started with&nbsp;
          <code className="font-mono font-bold">Sns login samples</code>
        </p>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <button
          onClick={FacebookHandler}
          className="px-5 py-4 text-left transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Facebook{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Facebook Login for the Web with the JavaScript SDK.
          </p>
        </button>

        <button
          onClick={NaverHandler}
          className="px-5 py-4 text-left transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Naver{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Naver Login for the Web with the JavaScript SDK.
          </p>
        </button>

        <button
          className="px-5 py-4 text-left transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Kakao{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Kakao Login for the Web with the JavaScript SDK.            
          </p>
        </button>

        <button
          className="px-5 py-4 text-left transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Apple{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Apple Login for the Web with the JavaScript SDK.            
          </p>
        </button>
      </div>

      <Script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={FacebookOnLoad}
      />
      <Script 
        src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
      />
    </main>
  )
}
