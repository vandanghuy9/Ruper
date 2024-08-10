"use client";
import React from "react";
import { useShopProduct } from "@context/ShopProductContext";
import WishListItem from "@component/wishlist/WishListItem";
const WishList = () => {
  const { wishList } = useShopProduct();
  return (
    <div className="shop-wishlist">
      <table class="wishlist-items">
        <tbody style={{ marginBottom: 5 }}>
          {wishList?.map((item) => (
            <WishListItem key={item.product._id} product={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
