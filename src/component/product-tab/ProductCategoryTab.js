"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ProductCarousel } from "@component/slider";
const ProductCategoryTab = ({ products }) => {
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
    [currentCategory, products]
  );
  return (
    <div className="block block-products">
      <div className="block-widget-wrap">
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
                <ProductCarousel productSet={filteredProductList} />
              </div>
            </div>
            <div className="btn-all">
              <Link className="button-outline" href="/shop">
                VIEW ALL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryTab;
