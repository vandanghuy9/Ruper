"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShopping } from "react-icons/ai";
import MobileFooter from "../footer/MobileFooter";
const NavBarMobile = () => {
  return (
    <>
      <div className="header-mobile">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    onClick={""}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <RxHamburgerMenu size={30} />
                  </button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
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
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                <div className="ruper-topcart dropdown">
                  <div className="mini-cart top-cart">
                    <div className="remove-cart-shadow"></div>
                    <button
                      type="button"
                      className="cart-icon"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <AiOutlineShopping size={30} />
                      <span className="cart-count">0</span>
                    </button>
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
