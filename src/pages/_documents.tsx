import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
class MyDocument extends Document {
  static getInitialProps({ renderPage }: any) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Alerta Assalto" />
          <meta name="theme-color" content="#000000" />
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