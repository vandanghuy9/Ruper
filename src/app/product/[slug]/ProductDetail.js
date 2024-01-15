"use client";
import ProductImage from "../../../component/product/ProductImage";
import Link from "next/link";
import ProductInfo from "../../../component/product/ProductInfo";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import ProductTab from "../../../component/product-tab/ProductTab";
import ProductCarousel from "@component/slider/ProductCarousel";
import { useState } from "react";
import useHandleCart from "../../../hooks/useHandleCart";
const ProductDetail = ({ product, relatedProducts }) => {
  const { handleAddToCart } = useHandleCart();
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (action) => {
    if (action === "INC") {
      setQuantity((prev) => prev + 1);
    } else if (action === "DEC") {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  const addToCart = (e) => {
    handleAddToCart(product, quantity);
    setQuantity(1);
  };
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
                      <div className="product-images col-lg-7 col-md-12 col-12">
                        <ProductImage thumbnails={product.imageUrl} />
                      </div>
                      <div className="product-info col-lg-5 col-md-12 col-12">
                        <ProductInfo
                          price={product.price}
                          discount={product.discount}
                          stocks={product.stocks}
                          description={product.description}
                        />
                        <div className="buttons">
                          <div className="add-to-cart-wrap">
                            <div className="quantity">
                              <button
                                type="button"
                                className="plus fs-2 fw-bold"
                                onClick={(e) => {
                                  handleQuantity("INC");
                                }}>
                                +
                              </button>
                              <span className="ps-5 pe-5 my-3 fs-2 fw-normal">{quantity}</span>
                              <button
                                type="button"
                                className="minus fs-2 fw-bold"
                                onClick={(e) => {
                                  handleQuantity("DEC");
                                }}>
                                -
                              </button>
                            </div>
                            <button
                              className="btn-add-to-cart button"
                              type="button"
                              onClick={addToCart}>
                              Add to cart
                            </button>
                          </div>
                          <div className="btn-quick-buy" data-title="Wishlist">
                            <button className="product-btn">Buy It Now</button>
                          </div>
                          <div className="btn-wishlist" data-title="Wishlist">
                            <button className="product-btn">Add to wishlist</button>
                          </div>
                          <div className="btn-compare" data-title="Compare">
                            <button className="product-btn">Compare</button>
                          </div>
                        </div>
                        <div className="product-meta">
                          <span className="sku-wrapper">
                            SKU: <span className="sku">D2300-3-2-2</span>
                          </span>
                          <span className="posted-in">
                            Category:{" "}
                            <Link href={"/"} rel="tag">
                              Furniture
                            </Link>
                          </span>
                          <span className="tagged-as">
                            Tags:{" "}
                            <Link href={"/"} rel="tag">
                              Hot
                            </Link>
                            <Link href={"/"} rel="tag">
                              Trend
                            </Link>
                          </span>
                        </div>
                        <div className="social-share">
                          <Link href={"#"} title="Facebook" target="_blank">
                            <FaFacebook size={20} />
                            Facebook
                          </Link>
                          <Link href={"#"} title="Twitter" target="_blank">
                            <FaTwitter size={20} />
                            Twitter
                          </Link>
                          <Link href={"#"} title="Pinterest" target="_blank">
                            <FaPinterest size={20} />
                            Pinterest
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProductTab />
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
