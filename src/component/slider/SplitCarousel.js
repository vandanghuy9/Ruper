"use client";
import React from "react";
import Image from "next/image";
import { splitPageSlides } from "@utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import WhiteButton from "../button/WhiteButton";
import Link from "next/link";
const SplitCarousel = () => {
  return (
    <div className="block block-sliders layout-9 nav-left auto-height m-b-0">
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
          {splitPageSlides.slice(0, 2).map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`item slick-slide ${isActive ? "slick-current slick-active" : ""}`}
                  key={slide.title}>
                  <div className="item-content">
                    <div className="content-image">
                      <Image width={959} height={963} src={slide.image} alt="Image Slider" />
                    </div>
                    <div className="item-info">
                      <div className="content">
                        <div className="content-wrap">
                          <h2 className="title-slider">
                            {slide.title}
                            <br /> {slide.subtitle}
                          </h2>
                          <Link className="button-slider button-black" href={slide.button.url}>
                            {slide.button.text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <SwiperSlide key={3}>
            {({ isActive }) => (
              <div className={`item slick-slide ${isActive ? "slick-current slick-active" : ""}`}>
                <div className="item-content">
                  <div className="item-info">
                    <div className="content">
                      <div className="content-wrap">
                        <h2 className="title-slider">
                          {splitPageSlides[2].title}
                          <br /> {splitPageSlides[2].subtitle}
                        </h2>
                        <Link
                          className="button-slider button-black"
                          href={splitPageSlides[2].button.url}>
                          {splitPageSlides[2].button.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content-image">
                    <Image
                      width={959}
                      height={963}
                      src={splitPageSlides[2].image}
                      alt="Image Slider"
                    />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SplitCarousel;
