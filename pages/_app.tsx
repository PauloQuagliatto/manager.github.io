import Head from "next/head";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalContextProvider } from "../src/context/GlobalContext";
import GlobalStyle from "../styles/global";

import Unauthorized from "../src/components/Unauthorized";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState<any>(null);
  
  if (pageProps.protected && !auth) {
    return <Unauthorized />;
  }

  return (
    <>
      <Head>Magic Manager</Head>
      <GlobalContextProvider setAuth={setAuth}>
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyle />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
