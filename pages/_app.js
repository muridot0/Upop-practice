import '../styles/globals.scss'
import { useEffect } from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'; // You can also use <link> for styles
// ..

function MyApp({ Component, pageProps }) {
  useEffect(()=> {AOS.init()}, [])
  return <Component {...pageProps} />
}

export default MyApp
