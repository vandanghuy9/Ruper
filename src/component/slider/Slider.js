import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { slides } from "@utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import WhiteButton from "../button/WhiteButton";
const Slider = () => {
  return (
    <>
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`item-product slick-slide ${
                  isActive ? "slick-current slick-active" : ""
                }`}
                key={slide.title}>
                <div className="items">
                  <div className="item-content">
                    <div className="content-image">
                      <Image
                        width={1920}
                        height={1080}
                        src={slide.image}
                        alt="Image Slider"></Image>
                    </div>
                    <div className="section-padding">
                      <div className="section-container">
                        <div className="item-info horizontal-start vertical-middle">
                          <div className="content">
                            <div className="subtitle-slider">{slide.subtitle}</div>
                            <h2 className="title-slider">{slide.title}</h2>
                            <div className="description-slider">{slide.description}</div>
                            <WhiteButton href={slide.button.url} buttonText={slide.button.text} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
