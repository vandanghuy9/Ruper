"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import ProductGridCard from "@component/product/ProductGridCard";
const StylishProductCategoryTab = ({ products }) => {
  const [currentCategory, setCurrentCategory] = useState("Top rating");
  const categoryList = ["Top rating", "Best Selling", "Featured"];
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
        <ul className="nav nav-tabs layout-2" role="tablist">
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
            <div className="products-list grid">
              <div className="row">
                {products.map((item) => (
                  <div key={item._id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="items">
                      <ProductGridCard product={item} homepage={false} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylishProductCategoryTab;
