import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import WishListPopUp from "@component/wishlist/WishListPopUp";
import ComparePopUp from "@component/compare/ComparePopUp";
import QuickViewPopUp from "@component/quick-view/QuickViewPopUp";
const Layout = ({ children }) => {
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <header id="site-header" className="site-header header-v1">
          <Navbar />
        </header>
        <main className="site-main">{children}</main>
        <footer id="site-footer" className="site-footer background">
          <Footer />
        </footer>
      </div>
      <WishListPopUp />
      <ComparePopUp />
      <QuickViewPopUp />
    </>
  );
};

export default Layout;
