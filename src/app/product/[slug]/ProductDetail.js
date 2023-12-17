"use client";
import ProductImage from "../../../component/product/ProductImage";
import Link from "next/link";
import ProductInfo from "../../../component/product/ProductInfo";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ProductDetail = () => {
  const thumbnails = ["/product/9.jpg", "/product/9-2.jpg", "/product/9-3.jpg"];
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">Bora Armchair</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="delimiter"></span>
                <Link href="/">Shop</Link>
                <span className="delimiter"></span>
                Bora Armchair
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="shop-details zoom">
              <div className="product-top-info">
                <div className="section-padding">
                  <div className="section-container p-l-r">
                    <div className="row">
                      <div className="product-images col-lg-7 col-md-12 col-12">
                        <ProductImage thumbnails={thumbnails} />
                      </div>
                      <div className="product-info col-lg-5 col-md-12 col-12">
                        <ProductInfo />
                        <div className="buttons">
                          <div className="add-to-cart-wrap">
                            <div className="quantity">
                              <span type="button" className="px-3">
                                <AiOutlineMinus />
                              </span>
                              <span className="qty">0</span>
                              <span type="button" className="px-3">
                                <AiOutlinePlus />
                              </span>
                            </div>
                            <div className="btn-add-to-cart button">
                              Add to cart
                            </div>
                          </div>
                          <div className="btn-quick-buy" data-title="Wishlist">
                            <button className="product-btn">Buy It Now</button>
                          </div>
                          <div className="btn-wishlist" data-title="Wishlist">
                            <button className="product-btn">
                              Add to wishlist
                            </button>
                          </div>
                          <div className="btn-compare" data-title="Compare">
                            <button className="product-btn">Compare</button>
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
