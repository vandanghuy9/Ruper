import Link from "next/link";

const AboutUsLayout = ({ children }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">About Us</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="delimiter"></span>About Us
              </div>
            </div>
          </div>

          <div id="content" className="site-content" role="main">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLayout;
