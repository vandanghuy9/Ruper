import ProductCard from "@component/product/Product";
import ProductServices from "@services/productService";
const ProductListGrid = async ({ showProducts }) => {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
        <div className="products-list grid">
          <div className="row">
            {showProducts.length === 0 ? (
              <h1 className="text-center text-md">No Result product</h1>
            ) : (
              showProducts.map((product) => (
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListGrid;
