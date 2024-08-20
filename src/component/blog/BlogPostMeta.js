import { CiFolderOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import Link from "next/link";

const BlogPostMeta = ({ _id, date, commentNumber, category }) => {
  return (
    <div className="post-meta">
      <span className="post-categories">
        <CiFolderOn size={20} /> <Link href={`/blog/${_id}`}>{category}</Link>
      </span>
      <span className="post-time">
        <CiClock2 size={20} />
        {date}
      </span>
      <span className="post-comment">
        <GoComment size={20} />
        {commentNumber} Comment
      </span>
    </div>
  );
};

export default BlogPostMeta;
