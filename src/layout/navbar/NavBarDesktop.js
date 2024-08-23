"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import dynamic from "next/dynamic";
import SignIn from "@component/modal/SignIn";
import Register from "@component/modal/Register";
import { useAuth } from "@context/UserContext";
import { useShopProduct } from "@context/ShopProductContext";
import NavbarBlogItem from "@component/blog/NavbarBlogItem";
import {
  homeCategoryMenu,
  shopCategoryMenu,
  blogCategoryMenu,
  pageMenu,
} from "@utils/data";
import { usePathname } from "next/navigation";
const Cart = dynamic(() => import("../../component/cart/Cart"), { ssr: false });

const NavBarDesktop = ({ blogList, sampleProduct }) => {
  const {
    isLoginActive,
    isRegisterActive,
    isFormActive,
    handleFormActive,
    handleLoginActive,
    handleRegisterActive,
    isUserLogin,
    getUserName,
    getUserId,
  } = useAuth();
  const pathname = usePathname();
  console.log(pathname);
  console.log(["/shop", "/cart", "/checkout", "/wishlist"].indexOf(pathname));
  const { wishList, handleSetWishList, wishListAdded } = useShopProduct();
  const isLogin = isUserLogin();
  const userName = getUserName();
  const useId = getUserId();
  return (
    <div
      className="header-desktop"
      // style={{ color: "white", backgroundColor: "black" }}
    >
      <div className="header-wrapper">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                <div className="site-logo">
                  <Link href={"/"}>
                    <Image
                      width={400}
                      height={79}
                      src="/logo.png"
                      alt="Ruper – Furniture HTML Theme"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div className="site-navigation">
                  <nav id="main-navigation">
                    <ul id="menu-main-menu" className="menu">
                      <li
                        className={`level-0 menu-item menu-item-has-children mega-menu ${
                          pathname === "/" && "current-menu-item"
                        }`}
                      >
                        <Link href={homeCategoryMenu.path}>
                          <span className="menu-item-text">
                            {homeCategoryMenu.text}
                          </span>
                        </Link>
                        <div className="sub-menu">
                          <div className="row">
                            {homeCategoryMenu.child.map((section) => (
                              <div className="col-md-6" key={section.id}>
                                <div className="menu-section">
                                  <h2 className="sub-menu-title">
                                    {section.text}
                                  </h2>
                                  <ul className="menu-list">
                                    {section.child &&
                                      section.child.map((item) => (
                                        <li key={item.id}>
                                          <Link href={item.path}>
                                            <span className="menu-item-text">
                                              {item.text}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li
                        className={`level-0 menu-item menu-item-has-children ${
                          ["/shop", "/cart", "/checkout", "/wishlist"].indexOf(
                            pathname
                          ) !== -1 && "current-menu-item"
                        } ${
                          pathname.indexOf("/product") !== -1 &&
                          "current-menu-item"
                        }`}
                      >
                        <Link href={shopCategoryMenu.path}>
                          <span className="menu-item-text">
                            {shopCategoryMenu.text}
                          </span>
                        </Link>
                        <ul className="sub-menu">
                          {shopCategoryMenu.child.map((section) =>
                            section.child ? (
                              <li
                                className="level-1 menu-item menu-item-has-children"
                                key={section.id}
                              >
                                <Link href={section.path}>
                                  <span className="menu-item-text">
                                    {section.text}
                                  </span>
                                </Link>
                                <ul className="sub-menu">
                                  {section.child.map((item) =>
                                    item.isPublic || isLogin ? (
                                      <li key={item.id}>
                                        <Link
                                          href={
                                            item.id === "SHOP/WISHLIST"
                                              ? `${item.path}/${useId}`
                                              : item.path
                                          }
                                        >
                                          <span className="menu-item-text">
                                            {item.text}
                                          </span>
                                        </Link>
                                      </li>
                                    ) : (
                                      <li>
                                        <Link
                                          href={"#"}
                                          onClick={handleFormActive}
                                        >
                                          <span className="menu-item-text">
                                            {item.text}
                                          </span>
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : section.isPublic || isLogin ? (
                              <li key={section.id}>
                                <Link
                                  href={
                                    section.id === "SHOP/WISHLIST"
                                      ? `${section.path}/${useId}`
                                      : section.id === "SHOP/DETAILS"
                                      ? `${section.path}/${sampleProduct._id}`
                                      : `${section.path}`
                                  }
                                >
                                  <span className="menu-item-text">
                                    {section.text}
                                  </span>
                                </Link>
                              </li>
                            ) : (
                              <li>
                                <Link href={"#"} onClick={handleFormActive}>
                                  <span className="menu-item-text">
                                    {section.text}
                                  </span>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                      <li
                        className={`level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center ${
                          pathname.indexOf(blogCategoryMenu.path) !== -1 &&
                          "current-menu-item"
                        }`}
                      >
                        <Link href={blogCategoryMenu.path}>
                          <span className="menu-item-text">
                            {blogCategoryMenu.text}
                          </span>
                        </Link>
                        <div className="sub-menu">
                          <div className="row">
                            <div className="col-md-5">
                              {blogCategoryMenu.child.map((section) => (
                                <div className="menu-section">
                                  <h2 className="sub-menu-title">
                                    {section.text}
                                  </h2>
                                  <ul className="menu-list">
                                    {section.child.map((item) => (
                                      <li key={item.id}>
                                        <Link
                                          href={
                                            section.id === "BLOG/DETAIL"
                                              ? item.path.replace(
                                                  "?",
                                                  `/${blogList?.at(0)?._id}?`
                                                )
                                              : item.path
                                          }
                                        >
                                          <span className="menu-item-text">
                                            {item.text}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="col-md-7">
                              <div className="menu-section">
                                <h2 className="sub-menu-title">Recent Posts</h2>
                                <div className="block block-posts recent-posts p-t-5">
                                  <ul className="posts-list">
                                    {blogList?.map((item) => (
                                      <NavbarBlogItem
                                        key={item._id}
                                        blog={item}
                                      />
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`level-0 menu-item menu-item-has-children ${
                          [
                            "/login",
                            "/forgot-password",
                            "/user/dashboard",
                            "/about-us",
                            "/faq",
                            "/page-404",
                          ].indexOf(pathname) !== -1 && "current-menu-item"
                        }`}
                      >
                        <Link href={pageMenu.path}>
                          <span className="menu-item-text">
                            {pageMenu.text}
                          </span>
                        </Link>
                        <ul className="sub-menu">
                          {pageMenu.child.map((item) =>
                            item.isPublic || isLogin ? (
                              <li key={item.id}>
                                <Link href={item.path}>
                                  <span className="menu-item-text">
                                    {item.text}
                                  </span>
                                </Link>
                              </li>
                            ) : (
                              <li key={item.id}>
                                <Link href={"#"} onClick={handleFormActive}>
                                  <span className="menu-item-text">
                                    {item.text}
                                  </span>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                      <li
                        className={`level-0 menu-item ${
                          pathname === "/contact" && "current-menu-item"
                        }`}
                      >
                        <Link href={"/contact"}>
                          <span className="menu-item-text">Contact</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div className="header-page-link">
                  {isLogin ? (
                    <Link
                      className="lh-1 fw-bold fs-2"
                      href={"/user/dashboard"}
                    >
                      {userName[0]}
                    </Link>
                  ) : (
                    <div className="login-header">
                      <button
                        type="button"
                        className="active-login"
                        onClick={handleFormActive}
                      >
                        Login
                      </button>
                      <div
                        className={
                          isFormActive
                            ? "form-login-register active"
                            : "form-login-register"
                        }
                      >
                        <div className="box-form-login">
                          <div
                            className="active-login"
                            onClick={handleFormActive}
                          ></div>
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
                  <div className="search-box">
                    <div className="search-toggle">
                      <AiOutlineSearch />
                    </div>
                  </div>
                  {/* Wishlist */}
                  <div className="wishlist-box">
                    {!isLogin ? (
                      <button
                        type="button"
                        title="wishlist"
                        className="wishlist-button"
                        onClick={handleFormActive}
                      >
                        <AiOutlineHeart color="black" size={30} />
                      </button>
                    ) : (
                      <Link href={`/wishlist/${useId}`}>
                        <AiOutlineHeart color="black" size={30} />
                        <span className="count-wishlist">
                          {wishList?.length}
                        </span>
                      </Link>
                    )}
                  </div>
                  {/* cart */}
                  <div className="ruper-topcart dropdown light">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;
