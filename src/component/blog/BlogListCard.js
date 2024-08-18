import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@utils/menu";
import BlogPostMeta from "./BlogPostMeta";
const BlogListCard = ({ blog }) => {
  const { _id, category, title, imageUrl, createdAt, comment } = blog;
  const formattedDate = formatDate(createdAt);

  return (
    <div className="post-entry post-wapper">
      <div className="post-image">
        <Link href={`/blog/${_id}`}>
          <Image src={imageUrl[0]} alt="thumbnail" width={1050} height={657} />
        </Link>
      </div>
      <div className="post-content">
        <h2 className="post-title">
          <Link href={`/blog/${_id}`}>{title}</Link>
        </h2>
        <BlogPostMeta _id={_id} date={formattedDate} commentNumber={comment?.length} />
        <div className="post-excerpt">
          Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor
          urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et
          ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non,
          velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....
        </div>
        <div className="post-btn">
          <Link className="button-outline" href={`/blog/${_id}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
