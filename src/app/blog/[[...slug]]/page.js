import BlogCategory from "./BlogCategory";
import BlogDetail from "./BlogDetail";
import { getShowBlog, getBlogByCategory, getAllBlogCategory } from "@services/blogService";
const Blog = async ({ params, searchParams }) => {
  const slug = params.slug;
  if (slug === undefined) {
    let PAGE_LIMIT = 6;
    const category = searchParams?.category;
    const layout = searchParams?.layout ? searchParams?.layout : "grid";
    const sidebar = searchParams?.sidebar ? searchParams?.sidebar : "left";
    const page = searchParams?.page ? searchParams?.page : 1;
    const searchQuery = searchParams?.query;
    const tags = searchParams?.tag;
    if (layout === "list") {
      PAGE_LIMIT = 3;
    }
    let query = "";
    if (category) {
      query = query.concat(`category=${category.toLowerCase().replaceAll("_", " ")}&`);
    }
    if (searchQuery) {
      query = query.concat(`query=${searchQuery}&`);
    }
    if (tags) {
      if (typeof tags === "string") {
        const formattedTag = tags.includes("_") ? tags.replaceAll("_", " ") : tag;
        query = query.concat(`tag=${formattedTag}&`);
      } else {
        query = query.concat(`tag=`);
        tags.forEach((tag, i) => {
          const formattedTag = tag.includes("_") ? tag.replaceAll("_", " ") : tag;
          query = query.concat(formattedTag);
          if (i < tags.length - 1) {
            query = query.concat(",");
          }
        });
        query = query.concat(`&`);
      }
    }
    query = query.concat(`page=${page}&limit=${PAGE_LIMIT}`);
    const res = await getBlogByCategory(query);
    const categoryList = await getAllBlogCategory();
    const recentPosts = await getShowBlog();
    return (
      <BlogCategory
        blogList={res.blog}
        totalPages={res.totalPages}
        categoryList={categoryList}
        recentPosts={recentPosts}
      />
    );
  }
  return <BlogDetail />;
};

export default Blog;
