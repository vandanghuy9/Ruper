import React from "react";
import BlogListGrid from "./BlogListGrid";
import { LayoutToggleMenu } from "@component/category/LayoutToggleMenu";
import Pagination from "@component/category/Pagination";
import BlogList from "./BlogList";

const BlogNoNavBarSection = ({ blogList, totalPages, layout }) => {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
      <div className="products-topbar clearfix">
        <div className="products-topbar-right">
          <LayoutToggleMenu />
        </div>
      </div>
      <div className={`posts-list ${layout}`}>
        {layout === "grid" ? (
          <BlogListGrid blogList={blogList} />
        ) : (
          <BlogList blogList={blogList} />
        )}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default BlogNoNavBarSection;
