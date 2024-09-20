import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import WishListPopUp from "@component/wishlist/WishListPopUp";
import ComparePopUp from "@component/compare/ComparePopUp";
import QuickViewPopUp from "@component/quick-view/QuickViewPopUp";
import SearchPopUp from "@component/search/SearchPopUp";
const Layout = ({ children }) => {
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <Navbar />
        <main className="site-main">{children}</main>
        <footer id="site-footer" className="site-footer background">
          <Footer />
        </footer>
      </div>
      <SearchPopUp />
      <WishListPopUp />
      <ComparePopUp />
      <QuickViewPopUp />
    </>
  );
};

export default Layout;
