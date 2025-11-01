import type { AppProps } from 'next/app';
// import { useRouter } from 'next/router'; 
import '../styles/globals.css';
// const ADS_SCRIPT_URL = '//tags.monetag.com/js/site.js?cid=SEU-ID-AQUI';
// const ADS_SCRIPT_URL = '//scripts.propellerads.com/YOUR-REAL-ID.js'; // Quando for real

export default function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter(); 
  // const shouldShowAds = router.pathname.startsWith('/post/');

  return (
    <>
      {/* {shouldShowAds && (
        <Ads scriptSrc={ADS_SCRIPT_URL} />
      )} */}
      
      <Component {...pageProps} />
    </>
  );
}