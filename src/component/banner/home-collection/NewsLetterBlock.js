"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { successNoti } from "@utils/notification/notification";
const NewsLetterBlock = ({ image }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
    control,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    successNoti("We will contact you soon");
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="block block-banners banners-effect">
          <div className="block-widget-banner">
            <div className="bg-banner">
              <div className="banner-wrapper banners">
                <div className="banner-image">
                  <Link href="#">
                    <Image width={961} height={452} src={image} alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <form className="block block-newsletter position-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="newsletter-wrap">
            <div className="sub-title">Join our mailing list!</div>
            <div className="title">Fancy $30* off your first order?</div>
            <div className="newsletter-content">
              <span className="your-email">
                <input
                  type="email"
                  name="your-email"
                  {...register("email")}
                  size="40"
                  aria-required="true"
                  placeholder="Email address"
                />
              </span>
              <span className="clearfix">
                <input type="submit" value="Subscribe" />
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBlock;
