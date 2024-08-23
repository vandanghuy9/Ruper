import Link from "next/link";
import FilterBar from "@component/category/FilterBar";
import ProductWithSideBarSection from "@component/category/ProductWithSideBarSection";
import ProductNoSideBarSection from "@component/category/ProductNoSideBarSection";
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
  layout,
  sidebar,
  totalPages,
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
                {sidebar === "left" && (
                  <>
                    <FilterBar
                      categoryOption={category}
                      brandOption={brand}
                      sizeOption={size}
                      page={page}
                      menu={categoryMenu}
                      priceOption={price}
                      featureProducts={featureProducts}
                      sidebar={sidebar}
                    />
                    <ProductWithSideBarSection
                      products={products}
                      layout={layout}
                      totalPages={totalPages}
                    />
                  </>
                )}
                {sidebar === "right" && (
                  <>
                    <ProductWithSideBarSection
                      products={products}
                      layout={layout}
                      totalPages={totalPages}
                    />
                    <FilterBar
                      categoryOption={category}
                      brandOption={brand}
                      sizeOption={size}
                      page={page}
                      menu={categoryMenu}
                      priceOption={price}
                      featureProducts={featureProducts}
                      sidebar={sidebar}
                    />
                  </>
                )}
                {sidebar === "none" && (
                  <ProductNoSideBarSection
                    products={products}
                    layout={layout}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopCategory;
