import type { AppProps } from 'next/app' 
import StyleGlobals from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <StyleGlobals>
      <Component {...pageProps} />
    </StyleGlobals>
  )
}
