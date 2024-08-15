import Link from "next/link";
export default function BlogLayout({ children }) {
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">Home Decor</h1>
            </div>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="delimiter"></span>
              <Link href="/blog">Home Decor</Link>
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
