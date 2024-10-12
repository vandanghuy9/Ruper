"use client";
import { luxurySlides as data } from "@utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
const LuxuryCarousel = () => {
  return (
    <div className="block block-sliders layout-7 auto-height nav-center">
      <div className="block-widget-wrap">
        <div className="row">
          <div className="col-md-3 sm-m-b-50">
            <div className="product-cats-intro-wrap">
              <div className="product-cats-intro">
                <h2 className="title">
                  Shop <br />
                  by trend
                </h2>
                <div className="description">
                  Style any outdoor area with some careful study and sound decisions.
                </div>
                <div className="link">
                  <Link href="/shop">All Categories</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="product-cats-list slick-wrap">
              <div className="slick-sliders content-category">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
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
                        <div className={`item slick-slide item-product-cat`}>
                          <div className="item-product-cat-content">
                            <Link href={"/shop"}>
                              <div className="item-image">
                                <Image
                                  width={330}
                                  height={400}
                                  src={slide.image}
                                  alt="Image Slider"></Image>
                              </div>
                            </Link>
                            <div className="product-cat-content-info">
                              <h2 className="item-title">
                                <Link href={slide.button.url}>{slide.title}</Link>
                              </h2>
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
    </div>
  );
};

export default LuxuryCarousel;
