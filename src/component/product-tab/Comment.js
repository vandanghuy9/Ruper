import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const Comment = ({ comment }) => {
  const { _id, author, comment: userComment, rating } = comment;
  const nonRating = 5 - rating;
  return (
    <li className="review">
      <div className="content-comment-container">
        <div className="comment-container">
          <Image
            src="/user.jpg"
            className="avatar"
            height="60"
            width="60"
            alt="avatar"
          ></Image>
          <div className="comment-text">
            <div className="rating small">
              {[...Array(rating)].map((item) => (
                <AiFillStar key={item} size={20} color="#fcad02" />
              ))}
              {[...Array(nonRating)].map((item) => (
                <AiFillStar key={item} size={20} />
              ))}
            </div>
            <div className="review-author">{author}</div>
            <div className="review-time">January 12, 2022</div>
          </div>
        </div>
        <div className="description">
          <p>{userComment}</p>
        </div>
      </div>
    </li>
  );
};

export default Comment;
