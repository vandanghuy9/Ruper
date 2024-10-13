import { Logo, HeaderPageLink, NavbarDesktopMenu } from "@component/layout";
const RetroNavbarDesktop = ({ blogList, sampleProduct }) => {
  return (
    <div className="header-v2 large-height">
      <div className="header-desktop">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
                  <NavbarDesktopMenu blogList={blogList} sampleProduct={sampleProduct} />
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 text-center header-center">
                  <Logo />
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-right">
                  <HeaderPageLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroNavbarDesktop;
