"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
const slides = [
  {
    image: "/slider/10.jpg",
    title: "Office Collection",
    button: {
      text: "Shop Collection",
      url: "/shop",
    },
  },
  {
    image: "/slider/11.jpg",
    title: "Best Sellers",
    button: {
      text: "Shop Collection",
      url: "/shop",
    },
  },
  {
    image: "/slider/12.jpg",
    title: "New Arrivals",
    button: {
      text: "Shop Collection",
      url: "/shop",
    },
  },
];
const GridPageCarousel = () => {
  return (
    <div className="section-column left sm-m-b">
      <div className="block-widget-wrap">
        <div className="block block-sliders layout-4 auto-height">
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
              {slides.map(({ button, image, title }) => (
                <SwiperSlide key={title}>
                  {({ isVisibile, isActive }) => (
                    <div
                      className={`item slick-slide ${
                        isActive ? "slick-current slick-active" : ""
                      }`}>
                      <div className="item-content">
                        <div className="content-image">
                          <Image
                            width={691}
                            height={713}
                            src={image}
                            alt="Image Slider"
                            style={{ zIndex: 1 }}
                          />
                        </div>
                        <div
                          className="item-info horizontal-start vertical-bottom animation-top"
                          style={{ color: "#000" }}>
                          <div className="content">
                            <h2 className="title-slider">{title}</h2>
                            <Link className="button-slider btn-underline" href={button.url}>
                              {button.text}
                            </Link>
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
      </div>
    </div>
  );
};

export default GridPageCarousel;
