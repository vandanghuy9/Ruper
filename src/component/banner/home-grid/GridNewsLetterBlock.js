"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { successNoti } from "@utils/notification/notification";
const GridNewsLetterBlock = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
    control,
  } = useForm();
  const onSubmit = (data) => {
    successNoti("We will contact you soon");
  };

  return (
    <div className="section-container">
      <div className="block block-newsletter layout-2">
        <div className="block-widget-wrap">
          <div className="row">
            <div className="col-md-6">
              <div className="newsletter-title-wrap">
                <h2 className="newsletter-title">
                  Subscribe to get $50 off* your order
                </h2>
                <div className="newsletter-text">
                  Sign up for the latest trends, products, and inspiration.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="newsletter-form"
              >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridNewsLetterBlock;
