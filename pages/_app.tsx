import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/pageStyle.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
