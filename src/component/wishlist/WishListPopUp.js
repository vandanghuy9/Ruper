"use client";
import React, { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import WishList from "./WishList";
import { useShopProduct } from "@context/ShopProductContext";
import { fetchUserWishList } from "@services/userService";
import { useAuth } from "@context/UserContext";
const WishListPopUp = () => {
  const { wishListAdded, wishList, handleSetWishList, toggle } = useShopProduct();
  return (
    <div className={`wishlist-popup ${toggle === true ? "show" : ""}`}>
      <div className="wishlist-popup-inner">
        <div className="wishlist-popup-content">
          <WishList />
          <div className="wishlist-popup-content-bot">
            <div className="wishlist-popup-content-bot-inner">
              <Link className="wishlist-page" href={"/wishlist"}>
                Open wishlist page
              </Link>
              <span className="wishlist-continue" data-url="">
                Continue shopping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListPopUp;
