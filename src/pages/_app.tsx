import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import GlobalStyle from '@/globalStyles'
import Head from 'next/head'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick&Morty</title>
      </Head>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
