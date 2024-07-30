import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import WishListPopUp from "@component/wishlist/WishListPopUp";
const Layout = ({ children }) => {
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <header id="site-header" className="site-header header-v1">
          <Navbar />
        </header>
        <main className="site-main">{children}</main>
        <footer id="site-footer" className="site-footer">
          <Footer />
        </footer>
      </div>
      <WishListPopUp />
    </>
  );
};

export default Layout;
