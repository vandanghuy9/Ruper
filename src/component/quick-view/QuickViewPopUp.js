"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { useShopProduct } from "@context/ShopProductContext";
import { getProductById } from "@services/productService";
import useHandleCart from "@hooks/useHandleCart";
import { AiFillStar } from "react-icons/ai";
const QuickViewPopUp = () => {
  const [product, setProduct] = useState({});
  const { quickViewPopUpActive, handleCloseQuickViewPopUp, currentQuickViewProduct } =
    useShopProduct();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const { handleAddToCart } = useHandleCart();

  let sizes = product?.stocks?.map((item) => item.size);
  sizes = sizes?.filter((item, index) => sizes.indexOf(item) === index);
  let colors = product?.stocks?.map((item) => item.color);
  colors = colors?.filter((item, index) => colors.indexOf(item) === index);
  useEffect(() => {
    const fetchProduct = (id) => {
      getProductById(id).then((res) => {
        setProduct(res);
      });
    };
    if (currentQuickViewProduct !== "") {
      fetchProduct(currentQuickViewProduct);
    }
  }, [currentQuickViewProduct]);
  const handleQuantity = (action) => {
    if (action === "INC") {
      setQuantity((prev) => prev + 1);
    } else if (action === "DEC") {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const addToCart = (e) => {
    handleAddToCart(product, quantity, { size, color });
    setQuantity(1);
  };
  return (
    <div className={`quickview-popup ${quickViewPopUpActive ? "active" : ""}`}>
      <div id="quickview-container">
        <div className="quickview-container">
          <Link href="#" className="quickview-close" onClick={handleCloseQuickViewPopUp}></Link>
          <div className="quickview-notices-wrapper"></div>
          <div className="product single-product product-type-simple">
            <div className="product-detail">
              <div className="row">
                <div className="img-quickview">
                  <div className="product-images-slider">
                    <div id="quickview-slick-carousel">
                      <div className="images">
                        <div className="scroll-image">
                          <div className="slick-wrap">
                            <div className="slick-sliders image-additional">
                              <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[Pagination, Navigation]}
                                className="mySwiper">
                                {product?.imageUrl?.map((item) => (
                                  <div className="img-thumbnail slick-slide" key={item}>
                                    <SwiperSlide>
                                      <Link
                                        href={`/product/${product._id}`}
                                        className="image-scroll"
                                        title="">
                                        <Image
                                          width="900"
                                          height="900"
                                          src={item}
                                          alt={"Picture"}
                                        />
                                      </Link>
                                    </SwiperSlide>
                                  </div>
                                ))}
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quickview-single-info">
                  <div className="product-content-detail entry-summary">
                    <h1 className="product-title entry-title">Chair Oak Matt Lacquered</h1>
                    <div className="price-single">
                      <div className="price">
                        {product.discount ? (
                          <>
                            <del>
                              <span>${product.price}</span>
                            </del>
                            <ins>
                              <span>
                                ${Math.ceil((product.price * (100 - product.discount)) / 100)}
                              </span>
                            </ins>
                          </>
                        ) : (
                          <>${product.price}</>
                        )}
                      </div>
                    </div>
                    <div className="product-rating">
                      <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                        <AiFillStar color="#fcad02" />
                        <AiFillStar color="#fcad02" />
                        <AiFillStar color="#fcad02" />
                        <AiFillStar color="#fcad02" />
                      </div>
                      <Link href="#" className="review-link">
                        (<span className="count">1</span> customer review)
                      </Link>
                    </div>
                    <div className="description">
                      <p>{product.description}</p>
                    </div>
                    <div className="shop-details">
                      <div className="variations">
                        <table cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td className="label">Size</td>
                              <td className="attributes">
                                <ul className="text">
                                  {sizes?.map((size, i) => (
                                    <li key={i}>
                                      <input
                                        type="radio"
                                        name="size"
                                        id={size}
                                        value={size}
                                        onChange={handleSize}
                                      />
                                      <label htmlFor={size}>{size}</label>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="label">Color</td>
                              <td className="attributes">
                                <ul className="colors">
                                  {colors?.map((color, i) => (
                                    <li key={i}>
                                      <input
                                        type="radio"
                                        name="color"
                                        value={color}
                                        id={color}
                                        onChange={handleColor}
                                      />
                                      <label className={color} htmlFor={color}></label>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <form className="cart">
                      <div className="quantity-button">
                        <div className="quantity">
                          <button
                            type="button"
                            className="plus"
                            onClick={(e) => {
                              handleQuantity("INC");
                            }}>
                            +
                          </button>
                          <input
                            type="number"
                            className="input-text qty text"
                            step="1"
                            min="1"
                            max=""
                            name="quantity"
                            value={quantity}
                            title="Qty"
                            size="4"
                            placeholder=""
                            inputmode="numeric"
                            autoComplete="off"
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <button
                            type="button"
                            className="minus"
                            onClick={(e) => {
                              handleQuantity("DEC");
                            }}>
                            -
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={addToCart}
                          className="single-add-to-cart-button button alt">
                          Add to cart
                        </button>
                      </div>
                      <button className="button quick-buy">Buy It Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPopUp;
