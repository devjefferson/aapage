import '../styles/styles.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
const isProduction = process.env.NODE_ENV === "production";
import * as gtag from "../lib/gtag";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}
export default MyApp
