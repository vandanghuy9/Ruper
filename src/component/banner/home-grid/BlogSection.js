"use client";
import { useShopProduct } from "@context/ShopProductContext";
import BlogGridCard from "@component/blog/BlogGridCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const BlogSection = () => {
  const { blogList } = useShopProduct();
  return (
    <div className="block-content">
      <div className="posts-wrap slick-wrap">
        <div className="slick-sliders">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            {blogList?.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogGridCard blog={blog} homepage={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
