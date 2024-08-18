import FilterBar from "@component/blog/FilterBar";
import BlogWithNavbarSection from "@component/blog/BlogWithNavbarSection";
const BlogCategory = ({ blogList, totalPages, categoryList, recentPosts, sidebar }) => {
  return (
    <div className="row">
      {sidebar === "left" ? (
        <>
          <FilterBar categoryList={categoryList} recentPosts={recentPosts} />
          <BlogWithNavbarSection blogList={blogList} totalPages={totalPages} />
        </>
      ) : (
        <>
          <BlogWithNavbarSection blogList={blogList} totalPages={totalPages} />
          <FilterBar categoryList={categoryList} recentPosts={recentPosts} />
        </>
      )}
    </div>
  );
};

export default BlogCategory;
