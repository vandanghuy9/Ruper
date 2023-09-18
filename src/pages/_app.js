import "@styles/app.css";
import "@styles/responsive.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "@layout/Layout";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
// run by npm run dev
