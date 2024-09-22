"use client";
import { menu } from "@utils/data";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import ProductCategoryCard from "../product/ProductCategoryCard";
const ProductCategorySlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper">
      {menu.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCategoryCard key={item.category} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCategorySlider;
