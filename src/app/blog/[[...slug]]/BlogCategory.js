import FilterBar from "@component/blog/FilterBar";
import BlogWithNavbarSection from "@component/blog/BlogWithNavbarSection";
const BlogCategory = ({ blogList, totalPages, categoryList, recentPosts }) => {
  return (
    <div className="row">
      <FilterBar categoryList={categoryList} recentPosts={recentPosts} />
      <BlogWithNavbarSection blogList={blogList} totalPages={totalPages} />
    </div>
  );
};

export default BlogCategory;
