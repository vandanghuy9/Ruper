"use client";
import React from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { shopCategoryMenu } from "@utils/data";

const ShopProductSection = ({ setTabIndex }) => {
  return (
    <div id="mm-3" className={`sub-menu mm-panel mm-hasnavbar`}>
      <div className="mm-navbar">
        <Link className="mm-btn mm-prev" href={"#"} onClick={(e) => setTabIndex(2)}>
          <span className="mm-sronly">
            <FaAngleLeft color="#868686" size={20} />
          </span>
          <span className="mm-title">{shopCategoryMenu.child.at(0).text}</span>
        </Link>
      </div>
      <div className="row px-4 overflow-x-hidden overflow-y-auto">
        <div
          className="col-md-6 position-relative px-3"
          style={{ minHeight: "1px", width: "100%" }}>
          <div className="menu-section">
            <ul className="menu-list">
              {shopCategoryMenu.child.at(0).child.map((section) => (
                <li key={section.id}>
                  <Link href={section.path}>
                    <span className="menu-item-text">{section.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductSection;
