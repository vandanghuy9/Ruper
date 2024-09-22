"use client";
import { collectionSlides } from "@utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import WhiteButton from "../button/WhiteButton";

const CollectionPageSlider = () => {
  return (
    <div className="block block-sliders layout-3 nav-vertical">
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
          {collectionSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="item slick-slide">
                <div className="item-content">
                  <div className="content-image">
                    <Image width={1920} height={1080} src={slide.image} alt="Image Slider"></Image>
                  </div>
                  <div className="section-padding">
                    <div className="section-container">
                      <div className="item-info horizontal-start vertical-middle">
                        <div className="content">
                          <h2 className="title-slider">{slide.title}</h2>
                          <h2 className="title-slider">{slide.subtitle}</h2>
                          <div className="description-slider">{slide.description}</div>
                          <WhiteButton href={slide.button.url} buttonText={slide.button.text} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CollectionPageSlider;
