import Link from "next/link";
import { formatDate } from "@utils/menu";
import BlogPostMeta from "./BlogPostMeta";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import CommentSection from "./CommentSection";
const BlogDetailSection = ({ blog }) => {
  const { _id, category, title, imageUrl, createdAt, comment, content, tags, previous, next } =
    blog;
  const formattedDate = formatDate(createdAt);
  return (
    <div className="col-xl-9 col-lg-9 col-md-12 col-12 md-b-30 blog-details-content">
      <div className="post-details">
        <img src={imageUrl[0]} alt="thumbnail" />
        <h2 className="post-title">{title}</h2>
        <BlogPostMeta
          _id={_id}
          date={formattedDate}
          commentNumber={comment?.length}
          category={category}
        />
        <div className="post-content clearfix">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <div className="content-img">
            <img width={1410} height={460} src={imageUrl[1]} alt="thumbnail" />
          </div>
        </div>
        <div className="post-content-entry">
          <div className="tags-links">
            <label>Tags :</label>
            {tags?.map((item) => (
              <Link key={item} href={`/blog?tag=${item}`} rel="tag">
                {item}
              </Link>
            ))}
          </div>
          <div className="entry-social-share">
            <label>Share :</label>
            <div className="social-share">
              <Link href="#" title="Facebook" className="share-facebook" target="_blank">
                <FaFacebook size={20} />
                Facebook
              </Link>
              <Link href="#" title="Twitter" className="share-twitter">
                <FaTwitter size={20} />
                Twitter
              </Link>
              <Link href="#" title="Pinterest" className="share-pinterest">
                <FaPinterest size={20} />
                Pinterest
              </Link>
            </div>
          </div>
        </div>
        <div className="prev-next-post">
          {previous && (
            <div className="previous-post">
              <Link href={`/blog/${previous._id}`} rel="prev">
                <div className="hover-extend active">
                  <span>Previous</span>
                </div>
                <h2 className="title">{previous.title}</h2>
              </Link>
            </div>
          )}
          {next && (
            <div className="next-post">
              <Link href={`/blog/${next._id}`} rel="next">
                <div className="hover-extend active">
                  <span>Next</span>
                </div>
                <h2 className="title">{next.title}</h2>
              </Link>
            </div>
          )}
        </div>
        <CommentSection blogId={_id} comment={comment} />
      </div>
    </div>
  );
};

export default BlogDetailSection;
