import React from "react";
import ProductCategorySlider from "../../slider/ProductCategorySlider";
const ProductCategoryBanner = () => {
  return (
    <div className="block block-product-cats slider">
      <div className="block-widget-wrap">
        <div className="block-title">
          <h2>Shop by Department</h2>
        </div>
        <div className="block-content">
          <div className="product-cats-list slick-wrap">
            <div className="slick-sliders content-category">
              <ProductCategorySlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryBanner;
