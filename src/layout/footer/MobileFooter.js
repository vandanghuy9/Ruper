"use client";
import Link from "next/link";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { useAuth } from "@context/UserContext";
import { FaUserCheck } from "react-icons/fa";
import { useShopProduct } from "@context/ShopProductContext";

const MobileFooter = () => {
  const { handleFormActive, isUserLogin, getUserId } = useAuth();
  const isLogin = isUserLogin();
  const userId = getUserId();
  const { wishList, handleToggleSearchPopUp } = useShopProduct();

  return (
    <>
      <div className="shop-page">
        <Link href={"/"}>
          <BsShopWindow size={30} />
        </Link>
      </div>

      <div className="my-account">
        <div className="login-header">
          {isLogin ? (
            <Link href={"/user/dashboard"}>
              <FaUserCheck size={30} />
            </Link>
          ) : (
            <Link href={"#"} onClick={handleFormActive}>
              <AiOutlineUser size={30} />
            </Link>
          )}
        </div>
      </div>

      <div className="search-box">
        <div className="search-toggle">
          <Link href={"#"} onClick={handleToggleSearchPopUp}>
            <AiOutlineSearch size={30} />
          </Link>
        </div>
      </div>

      <div className="wishlist-box">
        {!isLogin ? (
          <Link
            href={`#`}
            className="wishlist-button"
            onClick={handleFormActive}
          >
            <AiOutlineHeart color="black" size={30} />
          </Link>
        ) : (
          <Link href={`/wishlist/${userId}`}>
            <span className="icon position-relative">
              <AiOutlineHeart color="black" size={30} />
              <span className="count-wishlist-mobile">{wishList?.length}</span>
            </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default MobileFooter;
