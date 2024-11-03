"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import ProductGridCard from "../product/ProductGridCard";

const UniqueProductCarousel = ({ productSet, homepage = false }) => {
  let slidedProductArr = [];
  for (let index = 0; index < productSet.length; index = index + 4) {
    if (index + 4 < productSet.length) {
      slidedProductArr.push(productSet.slice(index, index + 4));
    } else {
      slidedProductArr.push(productSet.slice(index));
    }
  }
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      loop={true}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper">
      {slidedProductArr.map((arr, index) => (
        <>
          <SwiperSlide key={index}>
            <div className="item-product slick-slide">
              {arr.slice(0, 2).map((product, index) => (
                <div className="items" key={index}>
                  <ProductGridCard key={product._id} product={product} homepage={homepage} />
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide key={index}>
            <div className="item-product slick-slide">
              {arr.slice(2).map((product, index) => (
                <div className="items" key={index}>
                  <ProductGridCard key={product._id} product={product} homepage={homepage} />
                </div>
              ))}
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default UniqueProductCarousel;
