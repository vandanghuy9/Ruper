import Link from "next/link";
const LoginRegisterLayout = ({ children }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">Login / Register</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="delimiter"></span>Login / Register
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
    </div>
  );
};

export default LoginRegisterLayout;
