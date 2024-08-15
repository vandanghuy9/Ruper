"use client";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@utils/menu";

const NavbarBlogItem = ({ blog }) => {
  const { _id, title, imageUrl, createdAt, comment } = blog;
  const formattedDate = formatDate(createdAt);

  return (
    <li className="post-item">
      <Link href={`/blog/${_id}`}>
        <Image src={imageUrl[0]} alt="thumbnail" width={90} height={60} />
      </Link>
      <div className="post-content">
        <h2 className="post-title">
          <Link href={`/blog/${_id}`}>{title}</Link>
        </h2>
        <div className="post-time">
          <span className="post-date">{formattedDate}</span>
          <span className="post-comment">{comment?.length} Comments</span>
        </div>
      </div>
    </li>
  );
};

export default NavbarBlogItem;
