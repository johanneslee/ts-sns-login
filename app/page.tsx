'use client';

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession();
  const providers = authOptions.providers.map(provider => provider.name);

  const handler = (provider: string) => {
    console.log(session);
    if (session) {
      if (session.user.provider.toUpperCase() === provider) {
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
    <main className="flex flex-col items-center justify-between min-h-screen gap-4 p-24 lg:flex-row">
      {
        providers.map((provider, index) => (
          <button
            key={index}
            onClick={() => { handler(provider) }}
            className="w-full p-4 text-left transition-colors border rounded-lg border-neutral-300 group hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {provider}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {provider} Login<br />
              for the Web
            </p>
          </button>
        ))
      }
    </main>
  )
}
