"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShopping } from "react-icons/ai";
import MobileFooter from "../footer/MobileFooter";
import { AiOutlineClose } from "react-icons/ai";
import {
  BlogSection,
  HomeSection,
  MainSection,
  PageSection,
  ShopProductSection,
  ShopSection,
} from "@component/navbar/mobile";
import SignIn from "@component/modal/SignIn";
import Register from "@component/modal/Register";
import { useAuth } from "@context/UserContext";
import dynamic from "next/dynamic";
import Image from "next/image";
const Cart = dynamic(() => import("@component/cart/Cart"), {
  ssr: false,
  loading: () => (
    <div className="icons-cart">
      <span className="icon">
        <AiOutlineShopping size={30} />
      </span>
    </div>
  ),
});

const NavBarMobile = ({ blogList, sampleProduct }) => {
  const [show, setShow] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const handleShow = () => setShow((prevShow) => !prevShow);
  const {
    isRegisterActive,
    isFormActive,
    handleFormActive,
    handleLoginActive,
    handleRegisterActive,
  } = useAuth();
  return (
    <>
      <div className="header-mobile z-1">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    onClick={handleShow}
                    className=" bg-transparent position-relative"
                    // style={{ display: show ? "none" : "initial" }}
                  >
                    <RxHamburgerMenu size={30} />
                  </button>
                  <div className={`site-mobile-navigation mm-wrapper ${show ? "active" : ""}`}>
                    <span
                      id="remove-megamenu"
                      className="remove-megamenu icon-remove"
                      onClick={handleShow}>
                      Close
                      <span className="icon">
                        <AiOutlineClose size={20} />
                      </span>
                    </span>
                    <nav
                      id="mobile-main-menu"
                      className="mm-menu position-absolute start-0 end-0 bottom-0">
                      <div className="mm-panels position-absolute start-0 end-0 bottom-0 top-0">
                        {tabIndex === 0 && <MainSection setTabIndex={setTabIndex} />}
                        {tabIndex === 1 && <HomeSection setTabIndex={setTabIndex} />}
                        {tabIndex === 2 && (
                          <ShopSection setTabIndex={setTabIndex} sampleProduct={sampleProduct} />
                        )}
                        {tabIndex === 3 && <ShopProductSection setTabIndex={setTabIndex} />}

                        {tabIndex === 4 && (
                          <BlogSection setTabIndex={setTabIndex} blogList={blogList} />
                        )}
                        {tabIndex === 5 && <PageSection setTabIndex={setTabIndex} />}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
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
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                <div className="ruper-topcart dropdown">
                  <div className="login-header">
                    <div
                      className={
                        isFormActive ? "form-login-register active" : "form-login-register"
                      }>
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
                  <div className="mini-cart top-cart">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mobile-fixed">
          <MobileFooter />
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
