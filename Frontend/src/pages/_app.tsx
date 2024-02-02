import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { appWithTranslation } from 'next-i18next'
import { RegisterContextProvider } from '@/context/resgister'

import "../scss/index.scss"
import "../scss/portals.scss"

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <RegisterContextProvider>
        <Component {...pageProps} />
      </RegisterContextProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(App)