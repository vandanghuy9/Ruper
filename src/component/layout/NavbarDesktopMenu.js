"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { homeCategoryMenu, shopCategoryMenu, blogCategoryMenu, pageMenu } from "@utils/data";
import NavbarBlogItem from "@component/blog/NavbarBlogItem";
import { useAuth } from "@context/UserContext";

const NavbarDesktopMenu = ({ blogList, sampleProduct }) => {
  const pathname = usePathname();
  const { handleFormActive, isUserLogin } = useAuth();
  const isLogin = isUserLogin();

  return (
    <div className="site-navigation">
      <nav id="main-navigation">
        <ul id="menu-main-menu" className="menu">
          <li
            className={`level-0 menu-item menu-item-has-children mega-menu ${
              pathname === "/" && "current-menu-item"
            }`}
            key={homeCategoryMenu.id}>
            <Link href={homeCategoryMenu.path}>
              <span className="menu-item-text">{homeCategoryMenu.text}</span>
            </Link>
            <div className="sub-menu">
              <div className="row">
                {homeCategoryMenu.child.map((section) => (
                  <div className="col-md-6" key={section.id}>
                    <div className="menu-section">
                      <h2 className="sub-menu-title">{section.text}</h2>
                      <ul className="menu-list">
                        {section.child &&
                          section.child.map((item) => (
                            <li key={item.id}>
                              <Link href={item.path}>
                                <span className="menu-item-text">{item.text}</span>
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
              ["/shop", "/cart", "/checkout", "/wishlist"].indexOf(pathname) !== -1 &&
              "current-menu-item"
            } ${pathname.indexOf("/product") !== -1 && "current-menu-item"}`}
            key={shopCategoryMenu.id}>
            <Link href={shopCategoryMenu.path}>
              <span className="menu-item-text">{shopCategoryMenu.text}</span>
            </Link>
            <ul className="sub-menu">
              {shopCategoryMenu.child.map((section) =>
                section.child ? (
                  <li className="level-1 menu-item menu-item-has-children" key={section.id}>
                    <Link href={section.path}>
                      <span className="menu-item-text">{section.text}</span>
                    </Link>
                    <ul className="sub-menu">
                      {section.child.map((item) =>
                        item.isPublic || isLogin ? (
                          <li key={item.id}>
                            <Link
                              href={
                                item.id === "SHOP/WISHLIST" ? `${item.path}/${userId}` : item.path
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
                    </ul>
                  </li>
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
            className={`level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center ${
              pathname.indexOf(blogCategoryMenu.path) !== -1 && "current-menu-item"
            }`}
            key={blogCategoryMenu.id}>
            <Link href={blogCategoryMenu.path}>
              <span className="menu-item-text">{blogCategoryMenu.text}</span>
            </Link>
            <div className="sub-menu">
              <div className="row">
                <div className="col-md-5">
                  {blogCategoryMenu.child.map((section) => (
                    <div className="menu-section" key={section.id}>
                      <h2 className="sub-menu-title">{section.text}</h2>
                      <ul className="menu-list">
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
                          <NavbarBlogItem key={item._id} blog={item} />
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
            className={`level-0 menu-item ${pathname === "/contact" && "current-menu-item"}`}>
            <Link href={"/contact"}>
              <span className="menu-item-text">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesktopMenu;
