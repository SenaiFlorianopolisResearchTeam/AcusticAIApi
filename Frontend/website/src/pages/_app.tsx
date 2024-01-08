import type { AppProps } from 'next/app'
import "../scss/index.scss"
import "../scss/portals.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
