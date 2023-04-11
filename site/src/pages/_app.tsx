import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import "@/scss/global.scss"
import { DragdropProvider } from '@/context/dragdrop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DragdropProvider>
        <Component {...pageProps} />
      </DragdropProvider>
    </ApolloProvider>
  )
}