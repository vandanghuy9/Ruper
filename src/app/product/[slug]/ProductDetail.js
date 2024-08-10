"use client";
import Link from "next/link";
import ProductInfo from "@component/product/ProductInfo";
import ProductTab from "@component/product-tab/ProductTab";
import ProductCarousel from "@component/slider/ProductCarousel";
const ProductDetail = ({ product, relatedProducts }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">{product.name}</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="delimiter"></span>
                <Link href="/">Shop</Link>
                <span className="delimiter"></span>
                {product.name}
              </div>
            </div>
          </div>

          <div id="content" className="site-content" role="main">
            <div className="shop-details zoom">
              <div className="product-top-info">
                <div className="section-padding">
                  <div className="section-container p-l-r">
                    <div className="row">
                      <ProductInfo product={product} />
                    </div>
                  </div>
                </div>
              </div>
              <ProductTab product={product} />
              <div className="product-related">
                <div className="section-padding">
                  <div className="section-container p-l-r">
                    <div className="block block-products slider">
                      <div className="block-title">
                        <h2>Related Products</h2>
                      </div>
                      <div className="block-content">
                        <div className="content-product-list slick-wrap">
                          <div className="slick-sliders products-list grid">
                            <ProductCarousel productSet={relatedProducts} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
