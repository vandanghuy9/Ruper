import React from "react";
import CollectionPageSlider from "../slider/CollectionPageSlider";
import Image from "next/image";
import Link from "next/link";
import {
  CollectionFirstBannerSection,
  ProductCategoryBanner,
  ProductStyleBanner,
} from "@component/banner";
import NewsLetterBlock from "@component/banner/home-collection/NewsLetterBlock";
import { ProductCarousel, TestimonialCardCarousel, BrandCarousel } from "@component/slider";
const CollectionHomePage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content">
            <section className="section m-b-70">
              <CollectionPageSlider />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-intro">
                  <div className="block-widget-wrap">
                    <div className="intro-image">
                      <Image
                        width={105}
                        height={105}
                        className="animation-round"
                        src="/logo-intro.png"
                        alt="logo-intro"
                      />
                    </div>
                    <div className="intro-text">
                      Ruper is an online furniture store in Australia which looks to reinvent how
                      furniture retail works.
                    </div>
                    <div className="intro-button">
                      <Link className="btn-underline center" href={"/blog"}>
                        Our Stories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <CollectionFirstBannerSection />
            </section>
            <section className="section section-padding top-border p-t-70 m-b-70">
              <div className="section-container">
                <ProductCategoryBanner />
              </div>
            </section>
            <section className="section background-2 no-space m-b-70">
              <NewsLetterBlock image={"/banner/newsletter-1.jpg"} />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <ProductStyleBanner />
              </div>
            </section>
            <section className="section section-padding top-border p-t-70 m-b-70">
              <div className="section-container">
                <div className="block block-products slider">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Browse our Bestsellers</h2>
                    </div>
                    <div className="block-content">
                      <div className="content-product-list slick-wrap">
                        <div className="slick-sliders products-list grid">
                          <ProductCarousel homepage={false} productSet={products} />
                        </div>
                      </div>
                      <div className="btn-all">
                        <Link className="button-outline" href="/shop">
                          VIEW ALL
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding top-border p-t-70 m-b-70">
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
            <BrandCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionHomePage;
