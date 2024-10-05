import FilterBar from "@component/blog/FilterBar";
import BlogWithNavbarSection from "@component/blog/BlogWithNavbarSection";
import BlogNoNavBarSection from "@component/blog/BlogNoNavBarSection";
import Link from "next/link";

const BlogCategory = ({
  blogList,
  totalPages,
  categoryList,
  recentPosts,
  sidebar,
  layout,
  category,
}) => {
  return (
    <div id="main-content" className="main-content">
      <div id="primary" className="content-area">
        <div id="title" className="page-title">
          <div className="section-container">
            <div className="content-title-heading">
              <h1 className="text-title-heading">{category}</h1>
            </div>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="delimiter"></span>
              <Link href={`/blog`}>{category}</Link>
            </div>
          </div>
        </div>
        <div id="content" className="site-content" role="main">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                {sidebar === "left" ? (
                  <>
                    <FilterBar
                      categoryList={categoryList}
                      recentPosts={recentPosts}
                    />
                    <BlogWithNavbarSection
                      blogList={blogList}
                      totalPages={totalPages}
                      layout={layout}
                    />
                  </>
                ) : sidebar === "right" ? (
                  <>
                    <BlogWithNavbarSection
                      blogList={blogList}
                      totalPages={totalPages}
                      layout={layout}
                    />
                    <FilterBar
                      categoryList={categoryList}
                      recentPosts={recentPosts}
                      layout={layout}
                    />
                  </>
                ) : (
                  <>
                    <BlogNoNavBarSection
                      blogList={blogList}
                      totalPages={totalPages}
                      layout={layout}
                    />
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

export default BlogCategory;
