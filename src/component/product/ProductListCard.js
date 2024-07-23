"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export const ProductListCard = ({ product }) => {
  const { _id, imageUrl, name, price, discount, comment, description } = product;
  return (
    <div className="products-entry clearfix product-wapper">
      <div className="row">
        <div className="col-md-4">
          <div className="products-thumb">
            <div className="product-lable">
              {discount > 0 && <div className="onsale">-{discount}%</div>}
              <div className="hot">{product?.productClass}</div>
            </div>
            <div className="product-thumb-hover">
              <Link href={`/product/${_id}`}>
                <Image
                  width={600}
                  height={600}
                  src={imageUrl[0]}
                  className="post-image"
                  alt="product image"
                />
                <Image
                  width={600}
                  height={600}
                  src={imageUrl[1]}
                  className="hover-image back"
                  alt="product image"
                />
              </Link>
            </div>
            <span className="product-quickview" data-title="Quick View">
              <Link href="#" className="quickview quickview-button">
                Quick View <i className="icon-search"></i>
              </Link>
            </span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="products-content">
            <h3 className="product-title">
              <a href="shop-details.html">{name}</a>
            </h3>
            <span className="price">
              {discount ? (
                <>
                  <del>
                    <span>${price}</span>
                  </del>
                  <ins>
                    <span>${Math.ceil((price * (100 - discount)) / 100)}</span>
                  </ins>
                </>
              ) : (
                <>${price}</>
              )}
            </span>
            <div className="rating">
              <div className="star star-5"></div>
              <div className="review-count">
                ({comment?.length}
                <span> review</span>)
              </div>
            </div>
            <div className="product-button">
              <div className="btn-add-to-cart" data-title="Add to cart">
                <Link rel="nofollow" href="#" className="product-btn button">
                  Add to cart
                </Link>
              </div>
              <div className="btn-wishlist" data-title="Wishlist">
                <button className="product-btn">Add to wishlist</button>
              </div>
              <div className="btn-compare" data-title="Compare">
                <button className="product-btn">Compare</button>
              </div>
            </div>
            <div className="product-description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
