import BlogListCard from "./BlogListCard";
const BlogList = ({ blogList }) => {
  return (
    <>
      {blogList?.map((item) => (
        <BlogListCard key={item._id} blog={item} />
      ))}
    </>
  );
};

export default BlogList;
