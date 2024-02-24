import ProductCard from "@component/product/Product";
const ProductListGrid = async ({ category, currentPage }) => {
  const showProducts = await fetch(
    `http://localhost:5055/api/products/filter?category=${category}`,
    { method: "GET" }
  ).then((res) => res.json());
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
        <div className="products-list grid">
          <div className="row">
            {showProducts.map((product) => (
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListGrid;
