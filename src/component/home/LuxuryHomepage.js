import React from "react";
import FeatureSectionLayoutFour from "@component/feature/FeatureSectionLayoutFour";
import WhiteButton from "@component/button/WhiteButton";
import {
  LuxuryProductCategoryBanner,
  LuxurySecondBanner,
  BlogSection,
  GridNewsLetterBlock,
} from "@component/banner";
import { LuxuryCarousel, ProductCategorySlider, TestimonialCardCarousel } from "@component/slider";
import StylishProductCategoryTab from "@component/product-tab/StylishProductCategoryTab";
const LuxuryHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section background-8 m-b-0 p-t-20 p-b-20">
              <div className="section-container">
                <FeatureSectionLayoutFour />
              </div>
            </section>
            <section className="section m-b-70">
              <div className="block block-parallax">
                <div className="content">
                  <h4 className="subtitle">Black Friday</h4>
                  <h2 className="title">SNEAK PEEK</h2>
                  <div className="description">UP TO 60% OFF</div>
                  <WhiteButton href={"/shop"} buttonText={"SHOP NOW"} />
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <LuxuryProductCategoryBanner />
              </div>
            </section>
            <section className="section background-9 section-padding p-t-80 p-b-70 m-b-70">
              <div className="section-container">
                <LuxuryCarousel />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <LuxurySecondBanner />
              </div>
            </section>
            <section className="section section-padding background-6 p-t-70 p-b-80 m-b-70">
              <div className="section-container">
                <div className="block block-product-cats slider round-border">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Our Collection</h2>
                    </div>
                    <div className="block-content">
                      <div className="product-cats-list slick-wrap">
                        <div className="slick-sliders content-category">
                          <ProductCategorySlider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding">
              <div className="section-container">
                <StylishProductCategoryTab products={products} />
              </div>
            </section>
            <section className="section section-padding background-10 p-t-70 p-b-70 m-b-70">
              <div className="section-container">
                <div className="block block-posts layout-2 white-bg">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Style Ideas</h2>
                    </div>
                    <BlogSection />
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-testimonial layout-2">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>What Our Customers Say</h2>
                    </div>
                    <div className="block-content">
                      <div className="testimonial-wrap slick-wrap">
                        <div className="slick-sliders">
                          <TestimonialCardCarousel />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding top-border p-t-50">
              <GridNewsLetterBlock />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHomepage;
