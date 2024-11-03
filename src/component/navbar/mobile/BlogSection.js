import React from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { blogCategoryMenu } from "@utils/data";
import NavbarBlogItem from "@component/blog/NavbarBlogItem";

const BlogSection = ({ setTabIndex, blogList }) => {
  return (
    <div id="mm-4" className={`sub-menu mm-panel mm-hasnavbar`}>
      <div className="mm-navbar">
        <Link className="mm-btn mm-prev" href={"#"} onClick={(e) => setTabIndex(0)}>
          <span className="mm-sronly">
            <FaAngleLeft color="#868686" size={20} />
          </span>
          <span className="mm-title">{blogCategoryMenu.text}</span>
        </Link>
      </div>
      <div className="row px-4 overflow-x-hidden overflow-y-auto">
        <div
          className="col-md-5 position-relative px-3"
          style={{ minHeight: "1px", width: "100%" }}>
          {blogCategoryMenu.child.map((section, index) => (
            <div className="menu-section" key={index}>
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
          ))}
        </div>
        <div>
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
  );
};

export default BlogSection;
