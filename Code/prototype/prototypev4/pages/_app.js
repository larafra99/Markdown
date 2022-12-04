import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css';
// import '../styles/globals_sidebar.css';
import Layout from '../components/layout';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  console.log("_app");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  
}

export default MyApp;
