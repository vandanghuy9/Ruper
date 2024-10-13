import {
  GothicCarousel,
  ProductCategorySlider,
  ProductCarousel,
  BrandCarousel,
  TestimonialCardCarousel,
} from "@component/slider";
import {
  GothicFirstBanner,
  GothicLookbook,
  GothicCategoryBanner,
  MinimalNewsLetterBlock,
  RetroFirstBanner,
  RetroProductCategoryBanner,
  RetroSecondBanner,
} from "@component/banner";
import Image from "next/image";
import Link from "next/link";
import FeatureSection from "@component/feature/FeatureSection";
import NewsLetterBlock from "@component/banner/home-collection/NewsLetterBlock";

const RetroHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content">
            <section className="section m-b-70">
              <RetroFirstBanner />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <FeatureSection />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <RetroProductCategoryBanner />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <RetroSecondBanner />
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
            <section className="section background-2 no-space m-b-70">
              <NewsLetterBlock image={"/banner/newsletter-1.jpg"} />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-testimonial layout-2">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Happy Clients</h2>
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

export default RetroHomepage;
