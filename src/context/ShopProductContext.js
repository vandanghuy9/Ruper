"use client";
import React, { createContext, useContext, useState, useEffect, use } from "react";
import { addToWishList, fetchUserWishList } from "@services/userService";
import { successNoti, errorNoti } from "@utils/notification/notification";
import { useAuth } from "./UserContext";
const Context = createContext();
const ShopProductContext = ({ children }) => {
  const [wishlist, setWishList] = useState([]);
  const [toggle, setToggle] = useState([]);
  const [wishListAdded, setWishListAdded] = useState(false);
  const handleAddToWishList = async (productId) => {
    addToWishList(productId).then((res) => {
      successNoti(res?.message);
      setWishListAdded(true);
      setToggle(true);
    });
  };
  const handleCloseWishList = () => {
    return setToggle((prevToggle) => !prevToggle);
  };

  const handleSetWishList = (wishlist) => {
    setWishList(wishlist);
  };
  return (
    <Context.Provider
      value={{
        toggle,
        handleAddToWishList,
        wishListAdded,
        handleCloseWishList,
        wishlist,
        handleSetWishList,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useShopProduct = () => useContext(Context);
export default ShopProductContext;
