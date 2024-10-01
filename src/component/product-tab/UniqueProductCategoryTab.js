"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { UniqueProductCarousel } from "@component/slider";
const UniqueProductCategoryTab = ({ products }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const categoryObj = {};
  const categoryList = products
    ?.map((item) => {
      if (!categoryObj[`${item.parent}`]) {
        categoryObj[`${item.parent}`] = 1;
        return item.parent;
      }
      return "";
    })
    .filter((item) => item !== "");
  const filteredProductList = useMemo(
    () =>
      currentCategory === ""
        ? products
        : products?.filter((item) => item.parent === currentCategory),
    [currentCategory]
  );
  return (
    <div className="block block-products slide-two-rows">
      <ul className="nav nav-tabs" role="tablist">
        {categoryList.map((category, i) => (
          <li key={i} className="nav-item">
            <Link
              className={currentCategory === category ? "nav-link active" : "nav-link"}
              href={"#"}
              scroll={false}
              onClick={(e) => setCurrentCategory(category)}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active">
          <div className="content-product-list slick-wrap">
            <div className="slick-sliders products-list grid">
              <UniqueProductCarousel productSet={filteredProductList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueProductCategoryTab;
