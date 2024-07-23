import React, { Suspense } from "react";
import SortMenu from "@component/category/SortMenu";
import ProductListGrid from "@component/category/ProductListGrid";
import { ProductList } from "@component/category/ProductList";

import ProductSkeleton from "@component/skeleton/ProductSkeleton";
import { LayoutToggleMenu } from "@component/category/LayoutToggleMenu";
const ProductWithSideBarSection = ({ products, category, page, layout }) => {
  return (
    <div className="col-xl-9 col-lg-9 col-md-12 col-12 products-column">
      <div className="products-topbar clearfix">
        <div className="products-topbar-left">
          <div className="products-count">Showing all {products.length} results</div>
        </div>
        <div className="products-topbar-right">
          <SortMenu />
          <LayoutToggleMenu />
        </div>
      </div>
      <div className="tab-content">
        <Suspense key={category + page} fallback={<ProductSkeleton />}>
          {layout === "grid" ? (
            <ProductListGrid showProducts={products} />
          ) : (
            <ProductList showProducts={products} />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductWithSideBarSection;
