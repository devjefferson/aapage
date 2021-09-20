import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
  console.log(ctx.pathname)
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props) => sheet.collectStyles(<App {...props}/>)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
          <link href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" rel="stylesheet" />

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