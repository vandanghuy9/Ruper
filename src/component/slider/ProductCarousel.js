import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { useState } from "react";
import ProductCard from "../product/Product";
const ProductCarousel = ({ productSet }) => {
  const [products, setProducts] = useState(productSet);
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="item-product slick-slide">
              <div className="items">
                <ProductCard
                  id={product.id}
                  images={product.imageSrcs}
                  productTitle={product.productTitle}
                  price={product.price}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
