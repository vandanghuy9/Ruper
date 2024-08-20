import FilterBar from "@component/blog/FilterBar";
import BlogDetailSection from "@component/blog/BlogDetailSection";
const BlogDetail = ({ blog, categoryList, recentPosts, sidebar }) => {
  return (
    <div className="row">
      <FilterBar categoryList={categoryList} recentPosts={recentPosts} />
      <BlogDetailSection blog={blog} />
    </div>
  );
};

export default BlogDetail;
