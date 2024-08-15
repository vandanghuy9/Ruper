import React, { Suspense } from "react";
import ProductSkeleton from "@component/skeleton/ProductSkeleton";
import BlogGridCard from "./BlogGridCard";
const BlogListGrid = ({ blogList }) => {
  return (
    <div className="row">
      <Suspense key={blogList?.length} fallback={<ProductSkeleton />}>
        {blogList?.map((item) => (
          <BlogGridCard key={item._id} blog={item} />
        ))}
      </Suspense>
    </div>
  );
};

export default BlogListGrid;
