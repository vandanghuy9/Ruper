import React from "react";
import { Logo, NavbarDesktopMenu, HeaderPageLink } from "@component/layout";
const CollectionNavbarDesktop = ({ blogList, sampleProduct }) => {
  return (
    <div className="header-v3">
      <div className="header-desktop">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <div className="col-lg-8 header-left">
                  <Logo />
                  <NavbarDesktopMenu blogList={blogList} sampleProduct={sampleProduct} />
                </div>
                <div className="col-lg-4 header-right">
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

export default CollectionNavbarDesktop;
