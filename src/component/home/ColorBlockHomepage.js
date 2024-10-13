import {
  GothicCarousel,
  ProductCarousel,
  ProductCategorySlider,
  Testimonial,
  ColorBlockCarousel,
  StylishInstagramCarousel,
} from "@component/slider";
import {
  ScandinavianCategoryBanner,
  ModernFeatureSection,
  ModernSecondBannerSection,
  BlogSection,
  InstagramSection,
  ScandinavianSecondBanner,
  ProductCategoryBanner,
  ColorBlockLookBook,
} from "@component/banner";
import FeatureSection from "@component/feature/FeatureSection";
import Link from "next/link";
import { colorBlockCategoryBanner } from "@utils/data";
const ColorBlockHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section m-b-70">
              <ColorBlockCarousel />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <ProductCategoryBanner
                  isRoundBorder={true}
                  title="Our Collection"
                />
              </div>
            </section>
            <section className="section section-padding background-12 p-t-100 p-b-100 m-b-70">
              <div className="section-container">
                <ModernSecondBannerSection data={colorBlockCategoryBanner} />
              </div>
            </section>
            <section className="section section-padding">
              <div className="section-container">
                <div className="block block-products slider">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Best Seller</h2>
                    </div>
                    <div className="block-content">
                      <div className="content-product-list slick-wrap">
                        <div className="slick-sliders products-list grid">
                          <ProductCarousel
                            productSet={products}
                            homepage={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <ColorBlockLookBook products={products} />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <FeatureSection isNoBorder={true} />
              </div>
            </section>
            <section className="section top-border p-t-70 m-b-0">
              <div>
                <div className="block-title">
                  <h2>Let's Be Friends!</h2>
                </div>
                <div className="block-content">
                  <StylishInstagramCarousel />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBlockHomepage;
