import '../styles/styles.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
    <Head> 
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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7185818297801314"
     crossOrigin="anonymous"></script>
          
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
    <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDS48FL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}
export default MyApp
