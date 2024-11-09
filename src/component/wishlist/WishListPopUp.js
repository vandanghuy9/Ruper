"use client";
import React from "react";
import Link from "next/link";
import WishListPopUpContent from "./WishListPopUpContent";
import { useShopProduct } from "@context/ShopProductContext";
import { IoIosArrowRoundForward } from "react-icons/io";
const WishListPopUp = () => {
  const { toggle, handleCloseWishList } = useShopProduct();
  return (
    <div className={`wishlist-popup ${toggle === true ? "show" : ""}`}>
      <div className="wishlist-popup-inner">
        <div className="wishlist-popup-content">
          <WishListPopUpContent />
          <div className="wishlist-popup-content-bot">
            <div className="wishlist-popup-content-bot-inner">
              <Link className="wishlist-page" href={"/wishlist"}>
                Open wishlist page
              </Link>
              <span
                className="wishlist-continue"
                onClick={() => {
                  handleCloseWishList();
                }}>
                Continue shopping
                <IoIosArrowRoundForward size={25} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListPopUp;
