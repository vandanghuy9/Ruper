import Head from "next/head";
import Navbar from "./navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ruper store</title>
      </Head>
      <header id="site-header" className="site-header header-v1">
        <Navbar />
      </header>
      <main className="site-main">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
