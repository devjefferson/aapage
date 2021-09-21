import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import *  as gtag from '../lib/gtag';
const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(()=>{
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
     
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  },[router.events])
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}
export default MyApp
