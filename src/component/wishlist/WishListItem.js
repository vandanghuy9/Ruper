import React from "react";
import Link from "next/link";
import Image from "next/image";
const WishListItem = ({ product }) => {
  console.log(product);
  const { _id, imageUrl, name, price, discount } = product.product;
  const date = product.date;
  const productDetailURL = `/product/${_id}`;
  return (
    <>
      <tr className="wishlist-item">
        <td className="wishlist-item-remove">
          <span></span>
        </td>
        <td className="wishlist-item-image">
          <Link href="shop-details.html">
            <Image width="600" height="600" src={imageUrl[0]} alt="product" />
          </Link>
        </td>
        <td className="wishlist-item-info">
          <div className="wishlist-item-name">
            <Link href={productDetailURL}>{name}</Link>
          </div>
          <div className="wishlist-item-price">
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
              <span>${price}</span>
            )}
          </div>
          <div className="wishlist-item-time">{date}</div>
        </td>
        <td className="wishlist-item-actions">
          <div className="wishlist-item-stock">In stock</div>
          <div className="wishlist-item-add">
            <div data-title="Add to cart">
              <Link rel="nofollow" href="#" className="button">
                Add to cart
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default WishListItem;
