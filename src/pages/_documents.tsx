import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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

      <Html lang='pt-BR'>
        <Head>

          <meta http-equiv="Content-Language" content="pt-br" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Alerta Assalto</title>
          
          <meta
            name="description"
            content="compartilhamento de ocorrências e tentativas de assaltos e furtos nas regiões próximas aos usuários da nossa plataforma."
          ></meta>
          <meta name="keywords" content="aplicativo, assalto, furtos, arrastão, ocorrências, violencias, segurança" />
          
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MDS48FL');`}} />

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



        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDS48FL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument