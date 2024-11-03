"use client";
import { stylishBannerSlides } from "@utils/data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import BannerItem from "../BannerItem";
const BannerSlider = () => {
  return (
    <div className="block">
      <div className="block-widget-wrap">
        <div className="slick-wrap">
          <div className="slick-sliders slick-initialized slick-slider">
            <div className="slick-list draggable">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper">
                {stylishBannerSlides.map((slide, index) => (
                  <SwiperSlide key={index} style={{ width: 890, height: "100%" }}>
                    {({ isActive, isPrev, isNext }) => (
                      <div className="block-banners slider m-b-30">
                        <div className={`item slick-slide slick-center`}>
                          <div className="block-widget-banner">
                            <BannerItem
                              imageSrc={slide.imageSrc}
                              link={slide.link}
                              imgHeight={slide.imgHeight}
                              imgWidth={slide.imgWidth}>
                              <Link className="link-title" href={slide.link}>
                                <h3 className="title-banner">{slide.title}</h3>
                              </Link>
                              <div className="banner-image-description">{slide.description}</div>
                              <Link className="button button-outline" href={slide.link}>
                                SHOP NOW
                              </Link>
                            </BannerItem>
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
    </div>
  );
};

export default BannerSlider;
