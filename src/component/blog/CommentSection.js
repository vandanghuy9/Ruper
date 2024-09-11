import CommentForm from "./CommentForm";
import Comment from "./Comment";
const CommentSection = ({ blogId, comment }) => {
  return (
    <div id="comments" className="comments-area">
      <h3 className="comments-title">{`${comment.length} ${
        comment.length > 1 ? "comments" : "comment"
      }`}</h3>
      <div className="comments-list">
        {comment?.map((item) => (
          <Comment key={item._id} comment={item} />
        ))}
      </div>
      <CommentForm blogId={blogId} />
    </div>
  );
};

export default CommentSection;
