import FilterBar from "@component/blog/FilterBar";
import BlogDetailSection from "@component/blog/BlogDetailSection";
import Link from "next/link";

const BlogDetail = ({ blog, categoryList, recentPosts, sidebar }) => {
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">{blog.title}</h1>
            </div>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="delimiter"></span>
              <Link href="/blog">Blog</Link>
              <span className="delimiter"></span>
              <Link href={`/blog/${blog._id}?sidebar=${sidebar}`}>{blog.title}</Link>
            </div>
          </div>
        </div>
        <div id="content" className="site-content" role="main">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                {sidebar === "left" ? (
                  <>
                    <FilterBar categoryList={categoryList} recentPosts={recentPosts} />
                    <BlogDetailSection blog={blog} sidebar={sidebar} />
                  </>
                ) : sidebar === "right" ? (
                  <>
                    <BlogDetailSection blog={blog} sidebar={sidebar} />
                    <FilterBar categoryList={categoryList} recentPosts={recentPosts} />
                  </>
                ) : (
                  <>
                    <BlogDetailSection blog={blog} sidebar={sidebar} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
