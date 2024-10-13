"use client";
import { midCenturySlides as data } from "@utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
const MidCenturyCarousel = () => {
  return (
    <div className="block block-sliders layout-9 diff-col nav-left auto-height m-b-0">
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
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={`item slick-slide ${isActive ? "slick-current slick-active" : ""}`}>
                  <div className="item-content">
                    <div className="item-info ">
                      <div className="content background-1">
                        <div className="content-wrap">
                          <h2 className="title-slider">
                            {slide.title} <br /> {slide.subtitle}
                          </h2>
                          <div className="description-slider">{slide.description}</div>
                          <Link href={slide.button.url} className="button-slider button-black">
                            {slide.button.text}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="content-image">
                      <Image width={959} height={963} src={slide.image} alt="Image Slider"></Image>
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

export default MidCenturyCarousel;
