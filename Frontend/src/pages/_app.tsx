import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import "../scss/index.scss"
import "../scss/portals.scss"
import { RegisterContextProvider } from '@/context/resgister'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RegisterContextProvider>
      <Component {...pageProps} />
    </RegisterContextProvider>
  )
}

export default appWithTranslation(App)