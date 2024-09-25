"use client";
import { useEffect } from "react";
import { Logo, NavbarDesktopMenu, HeaderPageLink } from "@component/layout";
import CleanNavbarDesktop from "../clean/CleanNavbarDesktop";
import CollectionNavbarDesktop from "../collection/CollectionNavbarDesktop";
import GridNavbarDesktop from "../grid/GridNavbarDesktop";
import { useSearchParams } from "next/navigation";
import { useShopProduct } from "@context/ShopProductContext";
const NavBarDesktop = ({ blogList, sampleProduct }) => {
  const { setBlogList } = useShopProduct();
  useEffect(() => {
    setBlogList(blogList);
  }, [blogList]);

  const searchParams = useSearchParams();
  const homePageType = searchParams.get("type");
  if (!homePageType || homePageType === "MODERN")
    return (
      <div className="header-v1">
        <div className="header-desktop">
          <div className="header-wrapper">
            <div className="section-padding">
              <div className="section-container">
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

  if (homePageType === "CLEAN")
    return <CleanNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
  if (homePageType === "COLLECTION" || homePageType === "STYLISH")
    return <CollectionNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
  if (homePageType === "GRID" || homePageType === "MINIMAL")
    return <GridNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
};

export default NavBarDesktop;
