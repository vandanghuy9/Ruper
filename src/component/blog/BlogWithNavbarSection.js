"use client";
import BlogListGrid from "./BlogListGrid";
import { LayoutToggleMenu } from "@component/category/LayoutToggleMenu";
import Pagination from "@component/category/Pagination";
import { useSearchParams } from "next/navigation";
import BlogList from "./BlogList";
const BlogWithNavbarSection = ({ blogList, totalPages }) => {
  const searchParams = useSearchParams();
  const layout = searchParams.has("layout") ? searchParams.get("layout") : "grid";
  return (
    <div className="col-xl-9 col-lg-9 col-md-12 col-12">
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

export default BlogWithNavbarSection;
