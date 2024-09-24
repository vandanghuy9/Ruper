import { ModernCarousel, ProductCarousel, ProductCategorySlider } from "@component/slider";
import {
  ModernFirstBannerSection,
  ModernFeatureSection,
  ModernSecondBannerSection,
  BlogSection,
  InstagramSection,
} from "@component/banner";
import FeatureSection from "@component/feature/FeatureSection";

const ModernHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section m-b-0">
              <ModernCarousel />
            </section>
            <section className="section m-b-70">
              <ModernFirstBannerSection />
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
                          <ProductCarousel productSet={products} homepage={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding background-3 p-t-70 p-b-70 m-b-80">
              <div className="section-container">
                <ModernFeatureSection />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <ModernSecondBannerSection />
              </div>
            </section>
            <section className="section section-padding top-border p-t-70 m-b-70">
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
            <section className="section section-padding background-4 p-t-70 p-b-70 m-b-70">
              <div className="section-container">
                <div className="block block-posts layout-2">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Journal</h2>
                    </div>
                    <BlogSection />
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <InstagramSection />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <FeatureSection />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHomepage;
