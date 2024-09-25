"use client";
import { stylishSlides } from "@utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import WhiteButton from "../button/WhiteButton";

const StylishPageCarousel = () => {
  return (
    <div className="block block-sliders layout-7 auto-height nav-center">
      <div className="slick-sliders">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          {stylishSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={`item slick-slide ${isActive ? "slick-current slick-active" : ""}`}>
                  <div className="item-content">
                    <div className="content-image">
                      <Image
                        width={1920}
                        height={1080}
                        src={slide.image}
                        alt="Image Slider"></Image>
                    </div>
                    <div className="item-info horizontal-end vertical-middle">
                      <div className="content">
                        <h2 className="title-slider">{slide.title}</h2>
                        <div className="description-slider">{slide.description}</div>
                        <WhiteButton href={slide.button.url} buttonText={slide.button.text} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StylishPageCarousel;
