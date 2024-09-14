import React from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { pageMenu } from "@utils/data";
import { useAuth } from "@context/UserContext";

const PageSection = ({ setTabIndex }) => {
  const { handleFormActive, isUserLogin } = useAuth();
  const isLogin = isUserLogin();
  return (
    <div id="mm-5" className={`sub-menu mm-panel mm-hasnavbar`}>
      <div className="mm-navbar">
        <Link
          className="mm-btn mm-prev"
          href={"#"}
          onClick={(e) => setTabIndex(0)}
        >
          <span className="mm-sronly">
            <FaAngleLeft color="#868686" size={20} />
          </span>
          <span className="mm-title">{pageMenu.text}</span>
        </Link>
      </div>
      <div className="row px-4 overflow-x-hidden overflow-y-auto">
        <div
          className="col-md-6 position-relative px-3"
          style={{ minHeight: "1px", width: "100%" }}
        >
          <div className="menu-section">
            <ul className="menu-list">
              {pageMenu.child.map((section) =>
                section.isPublic || isLogin ? (
                  <li key={section.id}>
                    <Link href={section.path}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
