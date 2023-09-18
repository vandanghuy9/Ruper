import Head from "next/head";
import Navbar from "./navbar/Navbar";
const Layout = ({ chidren }) => {
  return (
    <div>
      <Head>
        <title>Ruper store</title>
      </Head>
      <header id="site-header" className="site-header header-v1">
        <Navbar />
      </header>
      <main className="site-main">{chidren}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
