// import '@/styles/assets/css/main.css';
// import '@/styles/css/noscript.css';
import '@/styles/globals.css';
import '@/styles/css/main.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// import '@/styles/assets/js/jquery.min.js';
// import '@/styles/assets/js/jquery.poptrox.min.js';
// import '@/styles/assets/js/browser.min.js';
// import '@/styles/assets/js/breakpoints.min.js';
// import '@/styles/assets/js/util.js';
// import '@/styles/assets/js/main.js';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
