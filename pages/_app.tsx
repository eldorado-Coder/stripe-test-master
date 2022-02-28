import { AppProps } from "next/app";
import { UserProvider } from '../context'
import Script from 'next/script'
import Head from 'next/head'



import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
// import Nav from '../components/common/Nav'
import Nav from "../components/common/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>
</Head>

<Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ"
  crossOrigin="anonymous"
/>
        <UserProvider>
       <Nav />
      <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
