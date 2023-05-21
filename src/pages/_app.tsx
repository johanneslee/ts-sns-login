import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps<{session: Session}>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Sns login samples</title>
      </Head>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
