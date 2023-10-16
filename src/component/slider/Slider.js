import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { slides } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import WhiteButton from "../button/WhiteButton";
import "swiper/css";
import "swiper/css/bundle";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

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
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <div className="item-content">
              <div className="content-image">
                <Image
                  width={1920}
                  height={1080}
                  src={slide.image}
                  alt="Image Slider"
                ></Image>
              </div>
              <div className="section-padding">
                <div className="section-container">
                  <div className="item-info horizontal-start vertical-middle">
                    <div className="content">
                      <div className="subtitle-slider">{slide.subtitle}</div>
                      <h2 className="title-slider">{slide.title}</h2>
                      <div className="description-slider">
                        {slide.description}
                      </div>
                      <WhiteButton
                        link={slide.button.url}
                        buttonText={slide.button.text}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
