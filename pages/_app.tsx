import '../styles/globals.scss';
import '../styles/memoEditer.scss';
import 'easymde/dist/easymde.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
