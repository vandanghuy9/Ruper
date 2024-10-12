"use client";
import React, { useEffect } from "react";
import { Logo, NavbarDesktopMenu, HeaderPageLink } from "@component/layout";
import { useShopProduct } from "@context/ShopProductContext";
import LuxurySearchForm from "@component/search/LuxurySearchForm";
const LuxuryNavbarDesktop = ({ blogList, sampleProduct }) => {
  const { setBlogList } = useShopProduct();
  useEffect(() => {
    setBlogList(blogList);
  }, [blogList]);

  return (
    <div className="header-v3 relative">
      <div className="header-desktop">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 header-left">
                  <Logo />
                  <NavbarDesktopMenu blogList={blogList} sampleProduct={sampleProduct} />
                </div>
                <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                  <LuxurySearchForm />
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

export default LuxuryNavbarDesktop;
