import ProductGridCard from "@component/product/ProductGridCard";
const ProductListGrid = async ({ showProducts }) => {
  return (
    <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
      <div className="products-list grid">
        <div className="row">
          {showProducts.length === 0 ? (
            <h1 className="text-center text-md">No Result product</h1>
          ) : (
            showProducts.map((product, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6" key={product._id}>
                <ProductGridCard key={index} product={product} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductListGrid;
