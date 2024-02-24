"use client";
import Link from "next/link";
import FilterBar from "@component/category/FilterBar";
import SortMenu from "@component/category/SortMenu";
import ProductListGrid from "@component/category/ProductListGrid";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductSkeleton from "@component/skeleton/ProductSkeleton";
const ShopCategory = ({ products }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const size = searchParams.get("size");
  const currentPage = searchParams.get("page");
  const brand = searchParams.get("brand");
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">Bed &amp; Bath</h1>
            </div>
            <div className="breadcrumbs">
              <Link href={"/"}>Home</Link>
              <span className="delimiter"></span>
              <Link href={"/"}>Shop</Link>
              <span className="delimiter"></span>Bed &amp; Bath
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
                  page={currentPage}
                />
                <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                  <div className="products-topbar clearfix">
                    <div className="products-topbar-left">
                      <div className="products-count">Showing all 21 results</div>
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
                  <Suspense key={category + currentPage} fallback={<ProductSkeleton />}>
                    <ProductListGrid category={category} currentPage={currentPage} />
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
