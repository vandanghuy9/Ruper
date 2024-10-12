import { Logo, NavbarDesktopMenu, HeaderPageLink, SearchBox } from "@component/layout";

const ScandinavianNavbarDesktop = ({ blogList, sampleProduct }) => {
  return (
    <div className="site-header header-v4 color-white bg-black">
      <div className="header-desktop">
        <div className="header-top">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
                  <div className="header-page-link">
                    <SearchBox />
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
                  <Logo />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                  <HeaderPageLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                  <NavbarDesktopMenu blogList={blogList} sampleProduct={sampleProduct} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScandinavianNavbarDesktop;
