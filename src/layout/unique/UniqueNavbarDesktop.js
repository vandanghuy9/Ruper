"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { Logo, HeaderPageLink } from "@component/layout";
import { usePathname } from "next/navigation";
import { homeCategoryMenu, shopCategoryMenu, blogCategoryMenu, pageMenu } from "@utils/data";
import { useAuth } from "@context/UserContext";

const UniqueNavbarDesktop = ({ blogList, sampleProduct }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const { handleFormActive, isUserLogin } = useAuth();
  const isLogin = isUserLogin();

  return (
    <div className="header-v2">
      <div className="header-desktop">
        <div id="header-topbar" className="topbar-v1 hidden-sm hidden-xs">
          <div className="topbar-inner">
            <div className="section-padding">
              <div className="section-container large">
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
            <div className="section-container large">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
                  <div className="menu-full">
                    <div
                      className="menu-toggle"
                      onClick={(e) => setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen)}>
                      <div className="menu-lines">
                        <span className="line-general line-1"></span>
                        <span className="line-general line-2"></span>
                        <span className="line-general line-3"></span>
                      </div>
                    </div>
                    {isNavOpen && (
                      <div className={`site-navigation ${isNavOpen ? "active" : ""}`}>
                        <div
                          className="close-menu-wrap"
                          onClick={(e) => setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen)}>
                          <div className="close-menu-full"></div>
                        </div>
                        <nav id="main-navigation">
                          <ul id="menu-main-menu" className="menu">
                            <li
                              className={`level-0 menu-item menu-item-has-children ${
                                pathname === "/" && "current-menu-item"
                              }`}
                              key={homeCategoryMenu.id}>
                              <Link href={homeCategoryMenu.path}>
                                <span className="menu-item-text">{homeCategoryMenu.text}</span>
                              </Link>
                              <ul className="sub-menu">
                                {homeCategoryMenu.child.map((section) => (
                                  <>
                                    {section.child &&
                                      section.child.map((item) => (
                                        <li key={item.id}>
                                          <Link href={item.path}>
                                            <span className="menu-item-text">{item.text}</span>
                                          </Link>
                                        </li>
                                      ))}
                                  </>
                                ))}
                              </ul>
                            </li>
                            <li
                              className={`level-0 menu-item menu-item-has-children ${
                                ["/shop", "/cart", "/checkout", "/wishlist"].indexOf(pathname) !==
                                  -1 && "current-menu-item"
                              } ${pathname.indexOf("/product") !== -1 && "current-menu-item"}`}
                              key={shopCategoryMenu.id}>
                              <Link href={shopCategoryMenu.path}>
                                <span className="menu-item-text">{shopCategoryMenu.text}</span>
                              </Link>
                              <ul className="sub-menu">
                                {shopCategoryMenu.child.map((section) =>
                                  section.child ? (
                                    <>
                                      {section.child.map((item) =>
                                        item.isPublic || isLogin ? (
                                          <li key={item.id}>
                                            <Link
                                              href={
                                                item.id === "SHOP/WISHLIST"
                                                  ? `${item.path}/${userId}`
                                                  : item.path
                                              }>
                                              <span className="menu-item-text">{item.text}</span>
                                            </Link>
                                          </li>
                                        ) : (
                                          <li key={item.id}>
                                            <Link href={"#"} onClick={handleFormActive}>
                                              <span className="menu-item-text">{item.text}</span>
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </>
                                  ) : section.isPublic || isLogin ? (
                                    <li key={section.id}>
                                      <Link
                                        href={
                                          section.id === "SHOP/WISHLIST"
                                            ? `${section.path}/${userId}`
                                            : section.id === "SHOP/DETAILS"
                                            ? `${section.path}/${sampleProduct._id}`
                                            : `${section.path}`
                                        }>
                                        <span className="menu-item-text">{section.text}</span>
                                      </Link>
                                    </li>
                                  ) : (
                                    <li key={section.id}>
                                      <Link href={"#"} onClick={handleFormActive}>
                                        <span className="menu-item-text">{section.text}</span>
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </li>
                            <li
                              className={`level-0 menu-item menu-item-has-children ${
                                pathname.indexOf(blogCategoryMenu.path) !== -1 &&
                                "current-menu-item"
                              }`}
                              key={blogCategoryMenu.id}>
                              <Link href={blogCategoryMenu.path}>
                                <span className="menu-item-text">{blogCategoryMenu.text}</span>
                              </Link>
                              <ul className="sub-menu">
                                {blogCategoryMenu.child.map((section) => (
                                  <>
                                    {section.child.map((item) => (
                                      <li key={item.id}>
                                        <Link
                                          href={
                                            section.id === "BLOG/DETAIL"
                                              ? item.path.replace("?", `/${blogList?.at(0)?._id}?`)
                                              : item.path
                                          }>
                                          <span className="menu-item-text">{item.text}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </>
                                ))}
                              </ul>
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
                              key={pageMenu.id}>
                              <Link href={pageMenu.path}>
                                <span className="menu-item-text">{pageMenu.text}</span>
                              </Link>
                              <ul className="sub-menu">
                                {pageMenu.child.map((item) =>
                                  item.isPublic || isLogin ? (
                                    <li key={item.id}>
                                      <Link href={item.path}>
                                        <span className="menu-item-text">{item.text}</span>
                                      </Link>
                                    </li>
                                  ) : (
                                    <li key={item.id}>
                                      <Link href={"#"} onClick={handleFormActive}>
                                        <span className="menu-item-text">{item.text}</span>
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </li>
                            <li
                              key={"contact"}
                              className={`level-0 menu-item ${
                                pathname === "/contact" && "current-menu-item"
                              }`}>
                              <Link href={"/contact"}>
                                <span className="menu-item-text">Contact</span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}
                  </div>
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

export default UniqueNavbarDesktop;
