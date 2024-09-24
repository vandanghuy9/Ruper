"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import WhiteButton from "../button/WhiteButton";
import { minimalPageSlides } from "@utils/data";
const MinimalCarousel = () => {
  return (
    <div className="block block-sliders layout-5 nav-left auto-height">
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
          {minimalPageSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`item slick-slide ${isActive ? "slick-current slick-active" : ""}`}
                  key={slide.title}>
                  <div className="item-content">
                    <div className="item-info">
                      <div className="content">
                        <div className="content-wrap">
                          <h2 className="title-slider">
                            {slide.title}
                            <br /> {slide.subtitle}{" "}
                          </h2>
                          <WhiteButton href={slide.button.url} buttonText={slide.button.text} />
                        </div>
                      </div>
                    </div>
                    <div className="content-image">
                      <Image width={700} height={785} src={slide.image} alt="Image Slider" />
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

export default MinimalCarousel;
