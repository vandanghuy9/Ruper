import Link from "next/link";

const WishListLayout = ({ children }) => {
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">Wishlist</h1>
            </div>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="delimiter"></span>
              <Link href="/shop">Shop</Link>
              <span className="delimiter"></span>Wishlist
            </div>
          </div>
        </div>
        <div id="content" className="site-content" role="main">
          <div className="section-padding">
            <div className="section-container p-l-r">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListLayout;
