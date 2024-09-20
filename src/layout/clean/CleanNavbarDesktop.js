"use client";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { Logo, NavbarDesktopMenu, HeaderPageLink } from "@component/layout";
const CleanNavbarDesktop = ({ blogList, sampleProduct }) => {
  return (
    <div className="header-v2">
      <div className="header-desktop">
        <div id="header-topbar" className="topbar-v1 hidden-sm hidden-xs">
          <div className="topbar-inner">
            <div className="section-padding">
              <div className="section-container large p-l-r">
                <div className="row">
                  <div className="col-md-6 topbar-left">
                    <div className="block block-html">
                      <div className="address hidden-xs">
                        <Link href="#">
                          <FiMapPin />
                          Find Store
                        </Link>
                      </div>
                      <div className="email hidden-xs">
                        <FaRegEnvelope />
                        <Link href="mailto:support@ruper.com">support@ruper.com</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 topbar-right">
                    <ul id="topbar-menu" className="menu">
                      <li className="menu-item">
                        <Link href="#">Gift Cards</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/faq">FAQs</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
                  <NavbarDesktopMenu blogList={blogList} sampleProduct={sampleProduct} />
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 text-center header-center">
                  <Logo />
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-right">
                  <HeaderPageLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanNavbarDesktop;
