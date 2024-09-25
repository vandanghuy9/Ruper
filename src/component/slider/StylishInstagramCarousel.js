"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { FaInstagram } from "react-icons/fa";
import { stylishInstaSlides } from "@utils/data";
import Link from "next/link";
const StylishInstagramCarousel = () => {
  return (
    <div className="block block-instagram slider no-space">
      <div className="slick-wrap">
        <div className="slick-sliders fullwidth">
          <Swiper
            spaceBetween={0}
            slidesPerView={5}
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
            {stylishInstaSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`item slick-slide ${isActive ? "slick-current slick-active" : ""}`}
                    key={slide.id}>
                    <div className="item-content">
                      <Link target="_blank" className="instagram" href={slide.href}>
                        <Image width={690} height={690} src={slide.imageSrc} alt="Image Slider" />
                        <FaInstagram className="icon" size={30} />
                      </Link>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StylishInstagramCarousel;
