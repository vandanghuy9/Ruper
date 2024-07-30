import React, { Suspense } from "react";
import SortMenu from "@component/category/SortMenu";
import ProductListGrid from "@component/category/ProductListGrid";
import { ProductList } from "@component/category/ProductList";
import Pagination from "@component/category/Pagination";
import ProductSkeleton from "@component/skeleton/ProductSkeleton";
import { LayoutToggleMenu } from "@component/category/LayoutToggleMenu";
const ProductWithSideBarSection = ({ products, layout, totalPages }) => {
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
        <Suspense key={layout} fallback={<ProductSkeleton />}>
          {layout === "grid" ? (
            <ProductListGrid showProducts={products} />
          ) : (
            <ProductList showProducts={products} />
          )}
        </Suspense>
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductWithSideBarSection;
