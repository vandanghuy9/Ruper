"use client";
import { useEffect } from "react";
import { Logo, NavbarDesktopMenu, HeaderPageLink } from "@component/layout";
import CleanNavbarDesktop from "../clean/CleanNavbarDesktop";
import CollectionNavbarDesktop from "../collection/CollectionNavbarDesktop";
import GridNavbarDesktop from "../grid/GridNavbarDesktop";
import UniqueNavbarDesktop from "../unique/UniqueNavbarDesktop";
import GothicNavbarDesktop from "../gothic/GothicNavbarDesktop";
import { useSearchParams } from "next/navigation";
import { useShopProduct } from "@context/ShopProductContext";
const NavBarDesktop = ({ blogList, sampleProduct }) => {
  const { setBlogList } = useShopProduct();
  useEffect(() => {
    setBlogList(blogList);
  }, [blogList]);

  const searchParams = useSearchParams();
  const homePageType = searchParams.get("type");
  if (!homePageType || homePageType === "MODERN" || homePageType === "GOTHIC")
    return <GothicNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;

  if (homePageType === "CLEAN")
    return <CleanNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
  if (homePageType === "COLLECTION" || homePageType === "STYLISH")
    return <CollectionNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
  if (homePageType === "GRID" || homePageType === "MINIMAL" || homePageType === "SPLIT")
    return <GridNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
  if (homePageType === "UNIQUE")
    return <UniqueNavbarDesktop blogList={blogList} sampleProduct={sampleProduct} />;
};

export default NavBarDesktop;
