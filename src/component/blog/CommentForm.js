"use client";
import React from "react";
import { errorNoti, successNoti } from "@utils/notification/notification";
import { saveBlogComment } from "@services/blogService";
import { useForm } from "react-hook-form";
import ErrorText from "@component/form/ErrorText";

const CommentForm = ({ blogId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: null,
      userName: null,
      userEmail: null,
      userWebsite: null,
    },
  });
  const onSubmit = async (data) => {
    try {
      saveBlogComment({ ...data, _id: blogId }).then((res) => {
        successNoti(res.message);
      });
    } catch (e) {
      errorNoti(e.response.data.message);
    }
  };

  return (
    <div className="comment-form">
      <div className="form-header">
        <h3>Leave a Reply</h3>
      </div>
      <form className="row" action={handleSubmit(onSubmit)}>
        <div className="comment-notes col-md-12 col-sm-12">
          Your email address will not be published.
        </div>
        <div className="form-group col-md-12 col-sm-12">
          <textarea
            id="comment"
            cols="45"
            rows="8"
            placeholder="Comment *"
            className="form-control"
            name="comment"
            {...register("comment", { required: "This field is required" })}></textarea>
          <ErrorText error={errors.comment} />
        </div>
        <div className="form-group col-md-6 col-sm-6">
          <input
            id="author"
            placeholder="Your Name *"
            type="text"
            size="30"
            className="form-control"
            name="userName"
            {...register("userName", { required: "This field is required" })}
          />
          <ErrorText error={errors.userName} />
        </div>
        <div className="form-group col-md-6 col-sm-6">
          <input
            id="email"
            placeholder="Your Email *"
            type="text"
            size="30"
            className="form-control"
            name="userEmail"
            {...register("userEmail", { required: "This field is required" })}
          />
          <ErrorText error={errors.userEmail} />
        </div>
        <div className="form-group col-md-12 col-sm-12">
          <input
            id="url"
            placeholder="Website"
            type="text"
            size="30"
            className="form-control"
            name="userWebsite"
            {...register("userWebsite", { required: false })}
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
