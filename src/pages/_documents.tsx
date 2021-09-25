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
      <html  lang='pt-BR'>
        <Head>
          
          <meta property="og:locale" content="pt-BR" />
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="Alerta Assalto" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="description"
            content="compartilhamento de ocorrências e tentativas de assaltos e furtos nas regiões próximas aos usuários da nossa plataforma."
          ></meta>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-WT5ZHZKW59`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WT5ZHZKW59', {
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