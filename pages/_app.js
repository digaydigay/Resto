import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../components/Layout";
import { useEffect } from "react";
import "aos/dist/aos.css";

import AOS from "aos";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <title>Resto | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fe2e019d14.js"
        crossOrigin="anonymous"
      ></Script>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
