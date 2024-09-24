"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { successNoti } from "@utils/notification/notification";

const NewsLetterForm = ({ title, description }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    successNoti("We will contact you soon");
  };

  return (
    <div className="block-widget-wrap">
      <div className="newsletter-title-wrap">
        <h2 className="newsletter-title">{title}</h2>
        <div className="newsletter-text">{description}</div>
      </div>
      <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="your-email"
          {...register("email")}
          size="40"
          placeholder="Email address"
        />
        <span className="btn-submit">
          <input type="submit" value="SUBSCRIBE" />
        </span>
      </form>
    </div>
  );
};

export default NewsLetterForm;
