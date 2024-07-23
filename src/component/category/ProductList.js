import React from "react";
import { ProductListCard } from "../product/ProductListCard";
export const ProductList = async ({ showProducts }) => {
  return (
    <div className="tab-pane fade show active" id="layout-list" role="tabpanel">
      <div className="products-list list">
        {showProducts.length === 0 ? (
          <h1 className="text-center text-md">No Result product</h1>
        ) : (
          showProducts.map((product, index) => <ProductListCard key={index} product={product} />)
        )}
      </div>
    </div>
  );
};
