"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const ProductCard = ({ product }) => {
  const { _id, imageUrl, name, price, discount } = product;
  const [index, setIndex] = useState(0);
  return (
    <div className="products-entry clearfix product-wapper">
      <div className="products-thumb">
        <div className="product-lable">
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
            <div className="product-btn button">Add to cart</div>
          </div>
          <div className="btn-wishlist" data-title="Wishlist">
            <button type="button" className="product-btn">
              Add to wishlist
            </button>
          </div>
          <div className="btn-compare" data-title="Compare">
            <button type="button" className="product-btn">
              Compare
            </button>
          </div>
          <span className="product-quickview" data-title="Quick View">
            <div className="quickview quickview-button">
              <button type="button" className="product-btn">
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
                  <span>${(price * discount) / 100}</span>
                </ins>
              </>
            ) : (
              <>${price}</>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
