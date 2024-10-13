"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHeartOutline, IoShuffleOutline, IoSearchOutline, IoHeart } from "react-icons/io5";
import { useShopProduct } from "@context/ShopProductContext";
import { useAuth } from "@context/UserContext";
import { AiFillStar } from "react-icons/ai";
import { calcuteRating } from "@utils/menu";
export const ProductListCard = ({ product }) => {
  const { _id, imageUrl, name, price, discount, comment, description } = product;
  const { wishListAdded, handleAddToWishList, getProductInWishList, handleRemoveFromWishList } =
    useShopProduct();
  const { isUserLogin, handleFormActive } = useAuth();
  const isProductInWishlist = getProductInWishList(_id);
  const onAddToWishList = (product) => {
    if (isUserLogin() === false) {
      return handleFormActive();
    }
    handleAddToWishList(_id);
  };
  const { rating, nonRating } = calcuteRating(comment);
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
              <button type="button" title="Quick view" className="quickview quickview-button">
                Quick View
                <IoSearchOutline size={20} />
              </button>
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
              {[...Array(rating)].map((item) => (
                <AiFillStar key={item} size={20} color="#fcad02" />
              ))}
              {[...Array(nonRating)].map((item) => (
                <AiFillStar key={item + rating} size={20} />
              ))}
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
              <div
                className={`btn-wishlist ${wishListAdded === true ? "added" : ""}`}
                data-title="Wishlist">
                {isProductInWishlist ? (
                  <button
                    type="button"
                    className="product-btn"
                    onClick={() => {
                      handleRemoveFromWishList(_id);
                    }}>
                    <IoHeart size={20} />
                    Remove from wishlist
                  </button>
                ) : (
                  <button
                    type="button"
                    className="product-btn"
                    onClick={() => {
                      onAddToWishList(product);
                    }}>
                    <IoHeartOutline size={20} />
                    Add to wishlist
                  </button>
                )}
              </div>
              <div className="btn-compare" data-title="Compare">
                <button type="button" className="product-btn">
                  <IoShuffleOutline size={20} />
                  Compare
                </button>
              </div>
            </div>
            <div className="product-description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
