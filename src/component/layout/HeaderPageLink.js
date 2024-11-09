"use client";
import dynamic from "next/dynamic";
import { useAuth } from "@context/UserContext";
import SignIn from "@component/modal/SignIn";
import Register from "@component/modal/Register";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { useShopProduct } from "@context/ShopProductContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
const Cart = dynamic(() => import("@component/cart/Cart"), {
  ssr: false,
  loading: () => (
    <div className="icons-cart">
      <span className="icon">
        <AiOutlineShopping size={25} />
      </span>
    </div>
  ),
});
const HeaderPageLink = () => {
  const {
    isRegisterActive,
    isFormActive,
    handleFormActive,
    handleLoginActive,
    handleRegisterActive,
    isUserLogin,
    getUserName,
    getUserId,
  } = useAuth();
  const isLogin = isUserLogin();
  const userName = getUserName();
  const userId = getUserId();
  const searchParams = useSearchParams();
  const homePageType = searchParams.get("type");
  const { wishList, handleToggleSearchPopUp } = useShopProduct();

  return (
    <div className="header-page-link">
      {isLogin ? (
        <Link className="lh-1 fw-bold fs-2" href={"/user/dashboard"}>
          {userName[0]}
        </Link>
      ) : (
        <div className="login-header">
          <button
            type="button"
            className={`active-login ${homePageType === "SCANDINAVIAN" ? "text-white" : ""}`}
            onClick={handleFormActive}>
            Login
          </button>
          <div className={isFormActive ? "form-login-register active" : "form-login-register"}>
            <div className="box-form-login">
              <div className="active-login" onClick={handleFormActive}></div>
              <div className="box-content">
                <SignIn
                  isRegisterActive={isRegisterActive}
                  handleRegisterActive={handleRegisterActive}
                  handleFormActive={handleFormActive}
                />
                <Register
                  isRegisterActive={isRegisterActive}
                  handleLoginActive={handleLoginActive}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Search */}
      {homePageType !== "SCANDINAVIAN" || homePageType !== "COLOR_BLOCK" ? (
        <div
          className={`search-box ${homePageType === "LUXURY" ? "hidden-lg" : ""}`}
          onClick={handleToggleSearchPopUp}>
          <div className="search-toggle">
            <AiOutlineSearch size={25} />
          </div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
      {/* Wishlist */}
      <div className="wishlist-box">
        {!isLogin ? (
          <button
            type="button"
            title="wishlist"
            className="wishlist-button"
            onClick={handleFormActive}>
            <AiOutlineHeart color={homePageType === "SCANDINAVIAN" ? "white" : "black"} size={25} />
          </button>
        ) : (
          <Link href={`/wishlist`}>
            <AiOutlineHeart color={homePageType === "SCANDINAVIAN" ? "white" : "black"} size={25} />
            <span className="count-wishlist">{wishList?.length}</span>
          </Link>
        )}
      </div>
      {/* cart */}
      <div className="ruper-topcart dropdown light">
        <Cart />
      </div>
    </div>
  );
};

export default HeaderPageLink;
