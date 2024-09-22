"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { useState } from "react";
import ProductGridCard from "../product/ProductGridCard";
const ProductCarousel = ({ productSet, homepage = false }) => {
  const [products, setProducts] = useState(productSet);
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="item-product slick-slide">
              <div className="items">
                <ProductGridCard key={index} product={product} homepage={homepage} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
