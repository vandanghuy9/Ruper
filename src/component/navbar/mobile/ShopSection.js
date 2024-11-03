"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { shopCategoryMenu } from "@utils/data";
import { useAuth } from "@context/UserContext";
const ShopSection = ({ setTabIndex, sampleProduct }) => {
  const { handleFormActive, isUserLogin, getUserId } = useAuth();
  const isLogin = isUserLogin();
  const userId = getUserId();

  return (
    <div id="mm-2" className={`sub-menu mm-panel mm-hasnavbar`}>
      <div className="mm-navbar">
        <Link className="mm-btn mm-prev" href={"#"} onClick={(e) => setTabIndex(0)}>
          <span className="mm-sronly">
            <FaAngleLeft color="#868686" size={20} />
          </span>
          <span className="mm-title">{shopCategoryMenu.text}</span>
        </Link>
      </div>
      <div className="row px-4 overflow-x-hidden overflow-y-auto">
        <div
          className="col-md-6 position-relative px-3"
          style={{ minHeight: "1px", width: "100%" }}>
          <div className="menu-section">
            <ul className="menu-list">
              {shopCategoryMenu.child.map((section) =>
                section.isPublic || isLogin ? (
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
                    {section.child && (
                      <Link
                        className="mm-next text-center pt-2"
                        href={"#"}
                        onClick={(e) => setTabIndex(3)}>
                        <FaAngleRight color="#868686" size={20} />
                      </Link>
                    )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
