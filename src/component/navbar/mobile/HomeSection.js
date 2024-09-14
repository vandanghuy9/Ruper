import React from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { homeCategoryMenu } from "@utils/data";
const HomeSection = ({ setTabIndex }) => {
  return (
    <div id="mm-1" className={`sub-menu mm-panel mm-hasnavbar`}>
      <div className="mm-navbar">
        <Link
          className="mm-btn mm-prev"
          href={"#"}
          onClick={(e) => setTabIndex(0)}
        >
          <span className="mm-sronly">
            <FaAngleLeft color="#868686" size={20} />
          </span>
          <span className="mm-title">Home</span>
        </Link>
      </div>
      <div className="row px-4 overflow-x-hidden overflow-y-auto">
        {homeCategoryMenu.child.map((section) => (
          <div
            className="col-md-6 position-relative px-3"
            key={section.id}
            style={{ minHeight: "1px", width: "100%" }}
          >
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
  );
};

export default HomeSection;
