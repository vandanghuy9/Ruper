import Link from "next/link";
const UserPageLayout = ({ children }) => {
  const tabs = [
    {
      id: "Dashboard",
      text: "Dashboard",
      href: "/user/dashboard",
    },
    {
      id: "Orders",
      text: "Orders",
      href: "/user/orders",
    },
    {
      id: "Addresses",
      text: "Addresses",
      href: "/user/addresses",
    },
    {
      id: "account",
      text: "Account details",
      href: "/user/account",
    },
    {
      id: "Logout",
      text: "Logout",
      href: "/",
    },
  ];
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">My Account</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="delimiter"></span>My Account
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="page-my-account">
                  <div className="my-account-wrap clearfix">
                    <nav className="my-account-navigation">
                      <ul className="nav nav-tabs">
                        {tabs.map(({ id, text, href }) => (
                          <li key={id}>
                            <Link
                              className="nav-link active"
                              href={href}
                              role="tab"
                            >
                              {text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="my-account-content tab-content">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageLayout;
