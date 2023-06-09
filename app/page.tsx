'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session, status } = useSession();
  const handler = (provider: string) => {
    console.log(session);
    if (session) {
      if (session.user.provider === provider) {
        alert(`you're logged in ${provider}`);
      } else {
        alert(`you're logged in other provider. we'll log out you now.`);
        signOut();
      }
    } else {
      signIn(provider);
    }
  };

  return (
    <main className="flex flex-col min-h-screen lg:flex-row items-center justify-between p-24">
      <button
        onClick={() => { handler('facebook') }}
        className="p-4 border-neutral-300 text-left transition-colors border rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Facebook{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Facebook Login<br />
          for the Web
        </p>
      </button>

      <button
        onClick={() => { handler('naver') }}
        className="p-4 border-neutral-300 text-left transition-colors border rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Naver{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Naver Login<br />
          for the Web
        </p>
      </button>

      <button
        onClick={() => { handler('kakao') }}
        className="p-4 border-neutral-300 text-left transition-colors border rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Kakao{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Kakao Login<br />
          for the Web
        </p>
      </button>

      <button
        onClick={() => { handler('google') }}
        className="p-4 border-neutral-300 text-left transition-colors border rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Google{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Google Login<br />
          for the Web
        </p>
      </button>

      <button
        onClick={() => { handler('credentials') }}
        className="p-4 border-neutral-300 text-left transition-colors border rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Credentials{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Credentials Login<br />
          for the Web
        </p>
      </button>
    </main>
  )
}
