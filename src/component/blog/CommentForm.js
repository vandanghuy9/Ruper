"use client";
import React from "react";
import { handleSubmitComment } from "../../lib/action";
import { successNoti } from "@utils/notification/notification";
import { revalidatePath } from "next/cache";

const CommentForm = ({ blogId }) => {
  const handleSubmit = handleSubmitComment.bind(null, blogId);

  return (
    <div className="comment-form">
      <div className="form-header">
        <h3>Leave a Reply</h3>
      </div>
      <form className="row" action={handleSubmit}>
        <div className="comment-notes col-md-12 col-sm-12">
          Your email address will not be published.
        </div>
        <div className="form-group col-md-12 col-sm-12">
          <textarea
            id="comment"
            cols="45"
            rows="8"
            placeholder="Comment"
            className="form-control"
            name="comment"></textarea>
        </div>
        <div className="form-group col-md-6 col-sm-6">
          <input
            id="author"
            placeholder="Your Name *"
            type="text"
            size="30"
            className="form-control"
            name="userName"
          />
        </div>
        <div className="form-group col-md-6 col-sm-6">
          <input
            id="email"
            placeholder="Your Email *"
            type="text"
            size="30"
            className="form-control"
            name="userEmail"
          />
        </div>
        <div className="form-group col-md-12 col-sm-12">
          <input
            id="url"
            placeholder="Website"
            type="text"
            size="30"
            className="form-control"
            name="userWebsite"
          />
        </div>
        <div className="form-group col-md-12">
          <input
            name="submit"
            type="submit"
            id="submit"
            className="btn button-outline"
            value="Post Comment"
          />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
