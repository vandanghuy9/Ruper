"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import ProductGridCard from "../product/ProductGridCard";

const UniqueProductCarousel = ({ productSet, homepage = false }) => {
  //   const [products, setProducts] = useState([]);
  //   const [currentIndex, setCurrentIndex] = useState([]);
  //   let endIndex = 0;
  //   let startIndex = 0;
  //   if (currentIndex > products.length) {
  //     startIndex = 0;
  //     endIndex = startIndex + 4;
  //   } else {
  //     startIndex = currentIndex;
  //     endIndex = currentIndex + 4 > products.length ? products.length : currentIndex + 4;
  //   }

  //   const handleChangeSlide = () => {
  //     setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 4);
  //   };
  let slidedProductArr = [];
  for (let index = 0; index < productSet.length; index = index + 4) {
    if (index + 4 < productSet.length) {
      slidedProductArr.push(productSet.slice(index, index + 4));
    } else {
      slidedProductArr.push(productSet.slice(index));
    }
  }
  console.log(slidedProductArr);
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
              {arr.slice(0, 2).map((product) => (
                <div className="items">
                  <ProductGridCard key={product._id} product={product} homepage={homepage} />
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide key={index}>
            <div className="item-product slick-slide">
              {arr.slice(2).map((product) => (
                <div className="items">
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
