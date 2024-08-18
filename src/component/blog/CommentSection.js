import Image from "next/image";
import { formatDate } from "@utils/menu";
import CommentForm from "./CommentForm";
import { useQueryClient, useQuery } from "@tanstack/react-query";
const CommentSection = ({ blogId, comment }) => {
  return (
    <div id="comments" className="comments-area">
      <h3 className="comments-title">{`${comment.length} ${
        comment.length > 1 ? "comments" : "comment"
      }`}</h3>
      <div className="comments-list">
        {comment?.map(({ _id, date, userName, content }) => (
          <div className="comment-item" key={_id}>
            <div className="comment-avatar">
              <Image alt="avatar" src="/user.jpg" className="avatar" height={70} width={70} />
            </div>

            <div className="comment-content-wrap">
              <div className="comment-author">{userName}</div>
              <div className="comment-time">{formatDate(date)}</div>
              <div className="comment-content">
                <p>{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CommentForm blogId={blogId} />
    </div>
  );
};

export default CommentSection;
