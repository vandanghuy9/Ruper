import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <header id="site-header" className="site-header header-v1">
        <Navbar />
      </header>
      <main className="site-main">{children}</main>
      <footer id="site-footer" className="site-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
