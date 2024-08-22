"use client";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@utils/menu";
import { useFilter } from "@context/CategoryContext";
const BlogGridCard = ({ blog }) => {
  const { _id, category, title, imageUrl, createdAt, comment } = blog;
  const formattedDate = formatDate(createdAt);
  const { sidebar } = useFilter();
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
      <div className="post-entry clearfix post-wapper">
        <div className="post-image">
          <Link href={`/blog/${_id}?sidebar=${sidebar}`}>
            <Image src={imageUrl[0]} alt="thumbnail" width={337} height={220} />
          </Link>
        </div>
        <div className="post-content">
          <div className="post-categories">
            <Link href="/shop">{category}</Link>
          </div>
          <h2 className="post-title">
            <Link href={`/blog/${_id}`}>{title}</Link>
          </h2>
          <div className="post-meta">
            <span className="post-time">{formattedDate}</span>
            <span className="post-comment">{comment?.length} Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridCard;
