import Link from "next/link";
export default function CartLayout({ children }) {
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">Shopping Cart</h1>
            </div>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="delimiter"></span>
              <Link href="/shop">Shop</Link>
              <span className="delimiter"></span>Shopping Cart
            </div>
          </div>
        </div>
        <div id="content" class="site-content" role="main">
          <div class="section-padding">
            <div class="section-container p-l-r">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
