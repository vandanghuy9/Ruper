import BlogListGrid from "./BlogListGrid";
import { LayoutToggleMenu } from "@component/category/LayoutToggleMenu";
import Pagination from "@component/category/Pagination";
const BlogWithNavbarSection = ({ blogList, totalPages }) => {
  return (
    <div className="col-xl-9 col-lg-9 col-md-12 col-12">
      <div className="products-topbar clearfix">
        <div className="products-topbar-right">
          <LayoutToggleMenu />
        </div>
      </div>
      <div className="posts-list grid">
        <BlogListGrid blogList={blogList} />
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default BlogWithNavbarSection;
