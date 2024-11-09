import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const MainSection = ({ setTabIndex }) => {
  return (
    <div
      id="mm-0"
      className={`mm-panel mm-opend d-block px-4 overflow-x-hidden overflow-y-auto py-4`}>
      <ul className="menu mm-listview">
        <li className="level-0 menu-item menu-item-has-children mega-menu">
          <Link className="mm-next text-center pt-2" href={"#"} onClick={(e) => setTabIndex(1)}>
            <FaAngleRight color="#868686" size={20} />
          </Link>
          <Link href={"/"}>
            <span className="menu-item-text">Home</span>
          </Link>
        </li>
        <li className="level-0 menu-item menu-item-has-children">
          <Link className="mm-next text-center pt-2" href={"#"} onClick={(e) => setTabIndex(2)}>
            <FaAngleRight color="#868686" size={20} />
          </Link>
          <Link href={"/"}>
            <span className="menu-item-text">Shop</span>
          </Link>
        </li>
        <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
          <Link className="mm-next text-center pt-2" href={"#"} onClick={(e) => setTabIndex(4)}>
            <FaAngleRight color="#868686" size={20} />
          </Link>
          <Link href={"/"}>
            <span className="menu-item-text">Blog</span>
          </Link>
        </li>
        <li className="level-0 menu-item menu-item-has-children current-menu-item">
          <Link className="mm-next text-center pt-2" href={"#"} onClick={(e) => setTabIndex(5)}>
            <FaAngleRight color="#868686" size={20} />
          </Link>
          <Link href={"/"}>
            <span className="menu-item-text">Pages</span>
          </Link>
        </li>
        <li className="level-0 menu-item">
          <Link href={"/contact"}>
            <span className="menu-item-text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainSection;
