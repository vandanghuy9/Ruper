import Link from "next/link";
import FilterBar from "@component/category/FilterBar";
import SortMenu from "@component/category/SortMenu";
import ProductListGrid from "@component/category/ProductListGrid";
import { Suspense } from "react";
import ProductSkeleton from "@component/skeleton/ProductSkeleton";
const ShopCategory = ({
  products,
  categoryMenu,
  category,
  brand,
  size,
  page,
  price,
  heading,
  featureProducts,
}) => {
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">{heading}</h1>
            </div>
            <div className="breadcrumbs">
              <Link href={"/"}>Home</Link>
              <span className="delimiter"></span>
              <Link href={"/"}>Shop</Link>
              <span className="delimiter"></span>
              {heading}
            </div>
          </div>
        </div>
        <div>
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <FilterBar
                  categoryOption={category}
                  brandOption={brand}
                  sizeOption={size}
                  page={page}
                  menu={categoryMenu}
                  priceOption={price}
                  featureProducts={featureProducts}
                />
                <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                  <div className="products-topbar clearfix">
                    <div className="products-topbar-left">
                      <div className="products-count">Showing all {products.length} results</div>
                    </div>
                    <div className="products-topbar-right">
                      <div className="products-sort dropdown">
                        <span
                          className="sort-toggle dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="true">
                          Default sorting
                        </span>
                        <SortMenu />
                      </div>
                    </div>
                  </div>
                  <Suspense key={category + page} fallback={<ProductSkeleton />}>
                    <ProductListGrid showProducts={products} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopCategory;
