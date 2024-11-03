"use client";
import React, { useState, useEffect, useTransition } from "react";
import WishListItem from "./WishListItem";
import { useShopProduct } from "@context/ShopProductContext";
import { fetchUserWishList } from "@services/userService";
import { useAuth } from "@context/UserContext";
import { AiOutlineHeart } from "react-icons/ai";
const WishListPopUpContent = () => {
  const { wishListAdded, wishList, handleSetWishList, toggle, handleCloseWishList } =
    useShopProduct();
  const { isUserLogin } = useAuth();
  const isLogin = isUserLogin();
  useEffect(() => {
    const getUserWishList = async () => {
      const res = await fetchUserWishList();
      handleSetWishList(res);
    };

    if (isLogin && wishListAdded !== undefined) {
      getUserWishList();
    }
  }, [wishListAdded, isLogin, handleSetWishList]);
  if (wishList.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="wishlist-popup-content-top">
        <AiOutlineHeart color="black" size={25} />
        <span className="wishlist-name">Wishlist</span>
        <span className="wishlist-count-wrapper">
          <span className="wishlist-count">{wishList?.length}</span>
        </span>
        <span
          className="wishlist-popup-close"
          onClick={() => {
            handleCloseWishList();
          }}></span>
      </div>
      <div className="wishlist-popup-content-mid">
        <table className="wishlist-items">
          <tbody>
            {wishList?.map((item) => (
              <WishListItem key={item.product._id} product={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WishListPopUpContent;
