"use client";
import React, { useEffect } from "react";
import { Logo, NavbarDesktopMenu, HeaderPageLink } from "@component/layout";
import { useShopProduct } from "@context/ShopProductContext";
const GridNavbarDesktop = ({ blogList, sampleProduct }) => {
  const { setBlogList } = useShopProduct();
  useEffect(() => {
    setBlogList(blogList);
  }, [blogList]);
  return (
    <div className="header-v1 relative">
      <div className="header-desktop">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                  <Logo />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                  <NavbarDesktopMenu blogList={blogList} sampleProduct={sampleProduct} />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
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

export default GridNavbarDesktop;
