import React from "react";
import { StylishPageCarousel, StylishInstagramCarousel } from "@component/slider";
import { StylishProductCategoryBanner, StylishBannerSlider } from "@component/banner";
import NewsLetterForm from "@component/banner/NewsLetterForm";
import StylishProductCategoryTab from "@component/product-tab/StylishProductCategoryTab";
import Image from "next/image";
const StylishHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section m-b-80">
              <StylishPageCarousel />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <StylishProductCategoryBanner />
              </div>
            </section>
            <section className="section section-padding top-border p-t-70">
              <div className="section-container">
                <StylishProductCategoryTab products={products} />
              </div>
            </section>
            <section className="section content-outside background-1">
              <StylishBannerSlider />
            </section>
            <section className="section section-padding top-border p-t-50 p-b-50 m-b-0">
              <div className="section-container">
                <div className="row sm-m-0">
                  <div className="col-md-6 sm-m-b-50 sm-p-0">
                    <div className="block block-newsletter layout-2 one-col align-left position-center">
                      <NewsLetterForm
                        title={"Join our email list."}
                        description={"Sign up for the latest trends, products, and inspiration."}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 sm-p-0">
                    <div className="block block-image text-center position-relative">
                      <Image width={671} height={503} src={"/banner/newsletter-2.jpg"} alt="" />
                      <Image
                        width={106}
                        height={105}
                        src={"/logo-intro.png"}
                        alt=""
                        className="animation-round position-v-top position-h-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section m-b-0">
              <StylishInstagramCarousel />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylishHomepage;
