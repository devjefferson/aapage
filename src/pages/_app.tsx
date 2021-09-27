import '../styles/styles.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
const isProduction = process.env.NODE_ENV === "production";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const handleRouteChange = (url) => {
    window.gtag('config', 'G-WT5ZHZKW59', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events])

  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}
export default MyApp
