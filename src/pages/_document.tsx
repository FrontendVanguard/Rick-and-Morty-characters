import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React, { ReactNode } from 'react'
import { ServerStyleSheet } from 'styled-components'

const CustomDocument = (): ReactNode => {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='shortcut icon'
          sizes='32x32'
          href='https://freepngimg.com/download/cartoon/72099-mortys-sanchez-morty-and-smith-pocket-facebook.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

CustomDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
      </>
    ) as DocumentInitialProps['styles'],
  }
}

export default CustomDocument
