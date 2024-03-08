import React from "react";
import Layout from "../components/layout";
import '../app/globals.css'
import "../styles/global.module.scss";
import "../styles/bright-code.module.scss"
import "../styles/envato-market.module.scss";
import "../styles/global.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout >

  );
}

export default App;
