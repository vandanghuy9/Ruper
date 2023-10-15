import Link from "next/link";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

const NavBarDesktop = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
    rememberme: 0,
  });
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });
  const handleFormActive = (e) => {
    e.preventDefault();
    setIsFormActive(!isFormActive);
    setIsRegisterActive(false);
    setIsLoginActive(false);
  };
  const handleLoginActive = (e) => {
    e.preventDefault();
    setIsRegisterActive(!isRegisterActive);
    setIsLoginActive(!isLoginActive);
  };
  const handleRegisterActive = (e) => {
    e.preventDefault();
    setIsLoginActive(!isLoginActive);
    setIsRegisterActive(!isRegisterActive);
  };
  const handleSignInFormChange = (e) => {
    setSignIn((prevSignIn) => ({
      ...prevSignIn,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRegisterFormChange = (e) => {
    setRegister((prevRegister) => ({
      ...prevRegister,
      [e.target.name]: e.target.value,
    }));
  };
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
                    <img
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
                      <li className="level-0 menu-item menu-item-has-children mega-menu current-menu-item">
                        <Link href={"/"}>
                          <span className="menu-item-text">Home</span>
                        </Link>
                        <div className="sub-menu">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="menu-section">
                                <h2 className="sub-menu-title">Furniture 1</h2>
                                <ul className="menu-list">
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Categories
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Clean
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Collection
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Grid
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Minimal
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Modern
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Stylish
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Unique
                                      </span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="menu-section">
                                <h2 className="sub-menu-title">Furniture 2</h2>
                                <ul className="menu-list">
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Split
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Gothic
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Luxury
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Scandinavian
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Mid-Century
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Retro
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/"}>
                                      <span className="menu-item-text">
                                        Home Color Block
                                      </span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="level-0 menu-item menu-item-has-children">
                        <Link href={"/"}>
                          <span className="menu-item-text">Shop</span>
                        </Link>
                        <ul className="sub-menu">
                          <li className="level-1 menu-item menu-item-has-children">
                            <Link href={"/"}>
                              <span className="menu-item-text">
                                Shop - Products
                              </span>
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href={"/"}>
                                  <span className="menu-item-text">
                                    Shop Grid - Left Sidebar
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href={"/"}>
                                  <span className="menu-item-text">
                                    Shop List - Left Sidebar
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href={"/"}>
                                  <span className="menu-item-text">
                                    Shop Grid - Right Sidebar
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href={"/"}>
                                  <span className="menu-item-text">
                                    Shop List - Right Sidebar
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href={"/"}>
                                  <span className="menu-item-text">
                                    Shop Grid - No Sidebar
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>{" "}
                          {/*1 */}
                          <li>
                            <Link href={"/"}>
                              <span className="menu-item-text">
                                Shop Details
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/"}>
                              <span className="menu-item-text">
                                Shop - Cart
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/"}>
                              <span className="menu-item-text">
                                Shop - Checkout
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href={"/"}>
                              <span className="menu-item-text">
                                Shop - Wishlist
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
                        <Link href={"/"}>
                          <span className="menu-item-text">Blog</span>
                        </Link>
                        <div className="sub-menu">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="menu-section">
                                <h2 className="sub-menu-title">
                                  Blog Category
                                </h2>
                                <ul className="menu-list">
                                  <li>
                                    <Link href="blog-grid-left.html">
                                      <span className="menu-item-text">
                                        Blog Grid - Left Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="blog-grid-right.html">
                                      <span className="menu-item-text">
                                        Blog Grid - Right Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="blog-list-left.html">
                                      <span className="menu-item-text">
                                        Blog List - Left Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="blog-list-right.html">
                                      <span className="menu-item-text">
                                        Blog List - Right Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="blog-grid-fullwidth.html">
                                      <span className="menu-item-text">
                                        Blog Grid - No Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="menu-section">
                                <h2 className="sub-menu-title">Blog Details</h2>
                                <ul className="menu-list">
                                  <li>
                                    <Link href="blog-details-left.html">
                                      <span className="menu-item-text">
                                        Blog Details - Left Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="blog-details-right.html">
                                      <span className="menu-item-text">
                                        Blog Details - Right Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="blog-details-fullwidth.html">
                                      <span className="menu-item-text">
                                        Blog Details - No Sidebar
                                      </span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="menu-section">
                                <h2 className="sub-menu-title">Recent Posts</h2>
                                <div className="block block-posts recent-posts p-t-5">
                                  <ul className="posts-list">
                                    <li className="post-item">
                                      <Link
                                        href="blog-details-right.html"
                                        className="post-image"
                                      >
                                        <Image
                                          src="/blog/1.jpg"
                                          width={560}
                                          height={90}
                                          alt="Blog 1"
                                        />
                                      </Link>
                                      <div className="post-content">
                                        <h2 className="post-title">
                                          <Link href="blog-details-right.html">
                                            Easy Fixes For Home Decor
                                          </Link>
                                        </h2>
                                        <div className="post-time">
                                          <span className="post-date">
                                            May 30, 2022
                                          </span>
                                          <span className="post-comment">
                                            4 Comments
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="post-item">
                                      <Link
                                        href="blog-details-right.html"
                                        className="post-image"
                                      >
                                        <Image
                                          src="/blog/2.jpg"
                                          width={560}
                                          height={90}
                                          alt="Blog 1"
                                        />
                                      </Link>
                                      <div className="post-content">
                                        <h2 className="post-title">
                                          <Link href="blog-details-right.html">
                                            How To Make Your Home A Showplace
                                          </Link>
                                        </h2>
                                        <div className="post-time">
                                          <span className="post-date">
                                            Aug 24, 2022
                                          </span>
                                          <span className="post-comment">
                                            2 Comments
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="post-item">
                                      <Link
                                        href="blog-details-right.html"
                                        className="post-image"
                                      >
                                        <Image
                                          src="/blog/3.jpg"
                                          width={560}
                                          height={90}
                                          alt="Blog 1"
                                        />
                                      </Link>
                                      <div className="post-content">
                                        <h2 className="post-title">
                                          <Link href="blog-details-right.html">
                                            Stunning Furniture With Aesthetic
                                            Appeal
                                          </Link>
                                        </h2>
                                        <div className="post-time">
                                          <span className="post-date">
                                            Dec 06, 2022
                                          </span>
                                          <span className="post-comment">
                                            1 Comment
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="level-0 menu-item menu-item-has-children ">
                        <Link href={"/"}>
                          <span className="menu-item-text">Pages</span>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="page-login.html">
                              <span className="menu-item-text">
                                Login / Register
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="page-forgot-password.html">
                              <span className="menu-item-text">
                                Forgot Password
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="page-my-account.html">
                              <span className="menu-item-text">My Account</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="page-about.html">
                              <span className="menu-item-text">About Us</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="page-contact.html">
                              <span className="menu-item-text">Contact</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="page-faq.html">
                              <span className="menu-item-text">FAQ</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="page-404.html">
                              <span className="menu-item-text">Page 404</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="level-0 menu-item ">
                        <Link href={"/"}>
                          <span className="menu-item-text">Contact</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div className="header-page-link">
                  <div className="login-header">
                    <button className="active-login" onClick={handleFormActive}>
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
                          <div
                            className={
                              !isRegisterActive
                                ? "form-login active"
                                : "form-login"
                            }
                          >
                            <form action="submit">
                              <h2>Sign in</h2>
                              <div className="content">
                                <div className="username">
                                  <input
                                    type="text"
                                    required="required"
                                    className="input-text"
                                    name="username"
                                    id="username"
                                    placeholder="Your name"
                                    value={signIn.username}
                                    onChange={handleSignInFormChange}
                                  />
                                </div>
                                <div className="password">
                                  <input
                                    className="input-text"
                                    required="required"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={signIn.password}
                                    onChange={handleSignInFormChange}
                                  />
                                </div>
                                <div className="rememberme-lost">
                                  <div className="rememberme">
                                    <input
                                      name="rememberme"
                                      type="checkbox"
                                      id="rememberme"
                                      value={signIn.rememberme}
                                      onChange={handleSignInFormChange}
                                    />
                                    <label
                                      htmlFor="rememberme"
                                      className="inline"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                  <div className="lost_password">
                                    <Link href="forgot-password.html">
                                      Lost your password?
                                    </Link>
                                  </div>
                                </div>
                                <div className="button-login">
                                  <input
                                    type="submit"
                                    className="button"
                                    name="login"
                                    value="Login"
                                  />
                                </div>
                                <div
                                  className="button-next-reregister"
                                  onClick={handleRegisterActive}
                                >
                                  Create An Account
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className={
                              isRegisterActive
                                ? "form-register active"
                                : "form-register"
                            }
                          >
                            <form action="submit" className="register">
                              <h2>REGISTER</h2>
                              <div className="content">
                                <div className="email">
                                  <input
                                    type="email"
                                    className="input-text"
                                    placeholder="Email"
                                    name="email"
                                    id="reg_email"
                                    value={register.email}
                                    onChange={handleRegisterFormChange}
                                  />
                                </div>
                                <div className="password">
                                  <input
                                    type="password"
                                    className="input-text"
                                    placeholder="Password"
                                    name="password"
                                    id="reg_password"
                                    value={register.password}
                                    onChange={handleRegisterFormChange}
                                  />
                                </div>
                                <div className="button-register">
                                  <input
                                    type="submit"
                                    className="button"
                                    name="register"
                                    value="Register"
                                  />
                                </div>
                                <div
                                  className="button-next-login"
                                  onClick={handleLoginActive}
                                >
                                  Already has an account
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Search */}
                  <div className="search-box">
                    <div className="search-toggle">
                      <AiOutlineSearch />
                    </div>
                  </div>
                  {/* Wishlist */}
                  <div className="wishlist-box">
                    <a href="shop-wishlist.html">
                      <AiOutlineHeart color="black" size={30} />
                    </a>
                    <span className="count-wishlist">1</span>
                  </div>
                  {/* cart */}
                  <div className="ruper-topcart dropdown light">
                    <div className=" mini-cart top-cart dropdown">
                      <div className="remove-cart-shadow"></div>
                      <div className="dropdown-toggle cart-icon">
                        <AiOutlineShopping size={30} color="black" />
                        <span className="cart-count">0</span>
                      </div>
                      <div className="dropdown-menu cart-popup">
                        <div className="cart-empty-wrap">
                          <ul className="cart-list">
                            <li className="empty">
                              <span>No products in the cart.</span>
                              <a className="go-shop" href="/">
                                GO TO SHOP
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="cart-list-wrap">
                          <ul className="cart-list ">
                            <li className="mini-cart-item">
                              <div className="remove" title="Remove this item">
                                <i className="icon_close"></i>
                              </div>
                              <a
                                href="shop-details.html"
                                className="product-image"
                              >
                                <Image
                                  src={"/product/3.jpg"}
                                  width={600}
                                  height={600}
                                ></Image>
                              </a>
                              <a
                                href="shop-details.html"
                                className="product-name"
                              >
                                Chair Oak Matt Lacquered
                              </a>
                              <div className="quantity">Qty: 1</div>
                              <div className="price">$150.00</div>
                            </li>
                            <li className="mini-cart-item">
                              <Link
                                href="#"
                                className="remove"
                                title="Remove this item"
                              >
                                <i className="icon_close"></i>
                              </Link>
                              <Link href="/" className="product-image">
                                <Image
                                  src={"/product/1.jpg"}
                                  width={600}
                                  height={600}
                                ></Image>
                              </Link>

                              <a href="/" className="product-name">
                                Zunkel Schwarz
                              </a>
                              <div className="quantity">Qty: 1</div>
                              <div className="price">$100.00</div>
                            </li>
                          </ul>
                          <div className="total-cart">
                            <div className="title-total">Total: </div>
                            <div className="total-price">
                              <span>$100.00</span>
                            </div>
                          </div>
                          <div className="free-ship">
                            <div className="title-ship">
                              Buy <strong>$400</strong> more to enjoy{" "}
                              <strong>FREE Shipping</strong>
                            </div>
                            <div className="total-percent">
                              <div
                                className="percent"
                                style={{ width: "20%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="buttons">
                            <Link
                              href="/"
                              className="button btn view-cart btn-primary"
                            >
                              View cart
                            </Link>
                            <Link
                              href="/"
                              className="button btn checkout btn-default"
                            >
                              Check out
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
