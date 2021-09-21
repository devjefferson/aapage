import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }


  render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:site_name" content="Alerta Assalto" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="Description"
            content="Conversor de moeda e taxa de câmbio para dólar, euro, libra e outras 17 moedas. Atualização em tempo real ✓ Rápido e prático."
          ></meta>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          <title>Alerta Assalto</title>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument