"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  use,
} from "react";
import { addToWishList, removeFromWishList } from "@services/userService";
import { successNoti, errorNoti } from "@utils/notification/notification";
import { useAuth } from "./UserContext";
import { useRouter } from "next/navigation";
const Context = createContext();
const ShopProductContext = ({ children }) => {
  const router = useRouter();
  const [wishList, setWishList] = useState([]);
  const [comparePopUpActive, setComparePopUpActive] = useState(false);
  const [toggle, setToggle] = useState([]);
  const [searchPopUpActive, setSearchPopUpActive] = useState(false);
  const [wishListAdded, setWishListAdded] = useState(false);
  const [currentCompareProduct, setCurrentCompareProduct] = useState("");
  const [quickViewPopUpActive, setQuickViewPopUpActive] = useState(false);
  const [currentQuickViewProduct, setCurrentQuickViewProduct] = useState("");
  const handleAddToWishList = async (productId) => {
    addToWishList(productId).then((res) => {
      successNoti(res?.message);
      setWishListAdded((prevWishListAdded) => !prevWishListAdded);
      setToggle(true);
    });
  };
  const handleRemoveFromWishList = async (productId) => {
    removeFromWishList(productId).then((res) => {
      successNoti(res?.message);
      setWishListAdded((prevWishListAdded) => !prevWishListAdded);
    });
  };
  const handleCloseComparePopUp = () => {
    setComparePopUpActive((prevComparePopUpActive) => !prevComparePopUpActive);
  };

  const handleOpenComparePopUp = (productId) => {
    setCurrentCompareProduct(productId);
    setComparePopUpActive((prevComparePopUpActive) => !prevComparePopUpActive);
  };

  const handleToggleSearchPopUp = () =>
    setSearchPopUpActive((prevSearchPopUpActive) => !prevSearchPopUpActive);

  const handleClickSuggestList = (href) => {
    handleToggleSearchPopUp();
    return router.push(href);
  };
  const handleCloseWishList = () => {
    return setToggle((prevToggle) => !prevToggle);
  };

  const handleSetWishList = (wishlist) => {
    setWishList(wishlist);
  };

  const getProductInWishList = (productId) => {
    return (
      wishList.find((item) => item.product._id === productId) !== undefined
    );
  };

  const handleOpenQuickViewPopUp = (productId) => {
    setCurrentQuickViewProduct(productId);
    setQuickViewPopUpActive(
      (prevQuickViewPopUpActive) => !prevQuickViewPopUpActive
    );
  };

  const handleCloseQuickViewPopUp = () => {
    setQuickViewPopUpActive(
      (prevQuickViewPopUpActive) => !prevQuickViewPopUpActive
    );
  };

  return (
    <Context.Provider
      value={{
        toggle,
        handleAddToWishList,
        wishListAdded,
        handleCloseWishList,
        wishList,
        handleSetWishList,
        handleRemoveFromWishList,
        getProductInWishList,
        handleCloseComparePopUp,
        handleOpenComparePopUp,
        handleOpenQuickViewPopUp,
        handleCloseQuickViewPopUp,
        currentCompareProduct,
        currentQuickViewProduct,
        comparePopUpActive,
        quickViewPopUpActive,
        handleToggleSearchPopUp,
        searchPopUpActive,
        handleClickSuggestList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useShopProduct = () => useContext(Context);
export default ShopProductContext;
