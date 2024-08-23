import React, { Suspense } from "react";
import ProductGridCard from "@component/product/ProductGridCard";
import { LayoutToggleMenu } from "@component/category/LayoutToggleMenu";
import SortMenu from "@component/category/SortMenu";
import { ProductList } from "@component/category/ProductList";
import ProductSkeleton from "@component/skeleton/ProductSkeleton";
const ProductNoSidebarSection = ({ products, layout }) => {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
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
            <div className="tab-content">
              <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
                <div className="products-list grid">
                  <div className="row">
                    {products.length === 0 ? (
                      <h1 className="text-center text-md">No Result product</h1>
                    ) : (
                      products.map((product, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={product._id}>
                          <ProductGridCard key={index} product={product} />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ProductList showProducts={products} />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductNoSidebarSection;
