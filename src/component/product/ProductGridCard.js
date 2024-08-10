"use client";
import { Fragment, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  IoBagOutline,
  IoHeartOutline,
  IoShuffleOutline,
  IoSearchOutline,
  IoHeart,
} from "react-icons/io5";
import { useShopProduct } from "@context/ShopProductContext";
import { useAuth } from "@context/UserContext";
import ComparePopUp from "@component/compare/ComparePopUp";
const ProductGridCard = ({ product }) => {
  const { _id, imageUrl, name, price, discount } = product;
  const [index, setIndex] = useState(0);
  // const [comparePopUpActive, setComparePopUpActive] = useState(false);
  const {
    wishListAdded,
    handleAddToWishList,
    getProductInWishList,
    handleRemoveFromWishList,
    handleOpenComparePopUp,
    handleOpenQuickViewPopUp,
  } = useShopProduct();
  const { isUserLogin, handleFormActive } = useAuth();
  const isProductInWishlist = getProductInWishList(_id);
  const onAddToWishList = (product) => {
    if (isUserLogin() === false) {
      return handleFormActive();
    }
    handleAddToWishList(_id);
  };
  return (
    <Fragment>
      <div className="products-entry clearfix product-wapper">
        <div className="products-thumb">
          <div className="product-lable">
            {discount > 0 && <div className="onsale">-{discount}%</div>}
            <div className="hot">{product?.productClass}</div>
          </div>
          <div>
            <Link href={`/product/${_id}`}>
              <Image
                width={600}
                height={600}
                src={index === 0 ? imageUrl[0] : imageUrl[1]}
                className="post-image"
                alt="product image"
                onMouseEnter={() => setIndex(1)}
                onMouseOut={() => setIndex(0)}
              />
            </Link>
          </div>
          <div className="product-button">
            <div className="btn-add-to-cart" data-title="Add to cart">
              <button type="button" className="product-btn button">
                <IoBagOutline size={20} />
                Add to cart
              </button>
            </div>
            <div
              className={`btn-wishlist ${wishListAdded === true ? "added" : ""}`}
              data-title={"Wishlist"}>
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
              <button
                type="button"
                className="product-btn"
                onClick={(e) => {
                  handleOpenComparePopUp(_id);
                }}>
                <IoShuffleOutline size={20} />
                Compare
              </button>
            </div>
            <span className="product-quickview" data-title="Quick View">
              <div className="quickview quickview-button">
                <button
                  type="button"
                  className="product-btn"
                  onClick={(e) => {
                    handleOpenQuickViewPopUp(_id);
                  }}>
                  <IoSearchOutline size={20} />
                  Quick View
                </button>
              </div>
            </span>
          </div>
        </div>
        <div className="products-content">
          <div className="contents text-center">
            <h3 className="product-title">
              <Link href={`/product/${_id}`}>{name}</Link>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductGridCard;
