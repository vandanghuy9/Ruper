import React from "react";
import Image from "next/image";
import { formatDate } from "@utils/menu";

const Comment = ({ comment }) => {
  const { _id, date, userName, content } = comment;
  return (
    <div className="comment-item" key={_id}>
      <div className="comment-avatar">
        <Image
          alt="avatar"
          src="/user.jpg"
          className="avatar"
          height={70}
          width={70}
        />
      </div>

      <div className="comment-content-wrap">
        <div className="comment-author">{userName}</div>
        <div className="comment-time">{formatDate(date)}</div>
        <div className="comment-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
