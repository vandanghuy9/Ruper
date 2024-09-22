"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { testimonial } from "@utils/data";
import TestimonialCard from "./TestimonialCard";
const TestimonialCardCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper">
      {testimonial?.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialCard
            content={item.content}
            img={item.img}
            name={item.name}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCardCarousel;
