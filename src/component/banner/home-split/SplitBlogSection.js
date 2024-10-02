"use client";
import { useShopProduct } from "@context/ShopProductContext";
import BlogGridCard from "@component/blog/BlogGridCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const SplitBlogSection = () => {
  const { blogList } = useShopProduct();
  return (
    <div className="block block-posts layout-3">
      <div className="block-widget-wrap-2">
        <div className="block-content">
          <div className="posts-wrap slick-wrap">
            <div className="slick-sliders">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  {blogList?.map((blog) => (
                    <BlogGridCard key={blog._id} blog={blog} homepage={true} />
                  ))}
                </SwiperSlide>
              </Swiper>

              {/* <div className="item slick-slide">
                <div className="post-grid post">
                  <div className="post-inner">
                    <div className="post-image">
                      <a className="post-thumbnail" href="blog-details-right.html">
                        <img
                          width="720"
                          height="484"
                          src="media/blog/1.jpg"
                          alt="Easy Fixes for Home Decor"
                        />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-categories">
                        <a href="blog-grid-right.html">Furniture</a>
                      </div>
                      <h2 className="post-title">
                        <a href="blog-details-right.html">Easy Fixes For Home Decor</a>
                      </h2>
                      <div className="btn-read-more">
                        <a className="read-more btn-underline" href="blog-details-right.html">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-grid post">
                  <div className="post-inner">
                    <div className="post-image">
                      <a className="post-thumbnail" href="blog-details-right.html">
                        <img
                          width="720"
                          height="484"
                          src="media/blog/2.jpg"
                          alt="How to Make your Home a Showplace"
                        />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-categories">
                        <a href="blog-grid-right.html">Home Decor</a>
                      </div>
                      <h2 className="post-title">
                        <a href="blog-details-right.html">How to Make your Home a Showplace</a>
                      </h2>
                      <div className="btn-read-more">
                        <a className="read-more btn-underline" href="blog-details-right.html">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-grid post">
                  <div className="post-inner">
                    <div className="post-image">
                      <a className="post-thumbnail" href="blog-details-right.html">
                        <img
                          width="720"
                          height="484"
                          src="media/blog/3.jpg"
                          alt="Stunning Furniture with Aesthetic Appeal"
                        />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-categories">
                        <a href="blog-grid-right.html">Life Style</a>
                      </div>
                      <h2 className="post-title">
                        <a href="blog-details-right.html">
                          Stunning Furniture with Aesthetic Appeal
                        </a>
                      </h2>
                      <div className="btn-read-more">
                        <a className="read-more btn-underline" href="blog-details-right.html">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="item slick-slide">
                <div className="post-grid post">
                  <div className="post-inner">
                    <div className="post-image">
                      <a className="post-thumbnail" href="blog-details-right.html">
                        <img
                          width="720"
                          height="484"
                          src="media/blog/4.jpg"
                          alt="How to Choose the Right Sectional Sofa"
                        />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-categories">
                        <a href="blog-grid-right.html">Office</a>
                      </div>
                      <h2 className="post-title">
                        <a href="blog-details-right.html">How to Choose the Right Sectional Sofa</a>
                      </h2>
                      <div className="btn-read-more">
                        <a className="read-more btn-underline" href="blog-details-right.html">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBlogSection;
