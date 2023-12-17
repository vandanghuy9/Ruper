"use client";
import Slider from "../component/slider/Slider";
import FirstBannerSection from "../component/banner/FirstBannerSection";
import ProductCarousel from "../component/slider/ProductCarousel";
import SecondBannerSection from "../component/banner/SecondBannerSection";
import VideoBanner from "../component/banner/VideoBanner";
import FeatureSection from "../component/feature/FeatureSection";
const HomePage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section">
              <div className="block block-sliders">
                <div className="slick-sliders">
                  <Slider />
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-60">
              <div className="section-container">
                <FirstBannerSection />
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
                          <ProductCarousel productSet={products} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Layout 2 */}
            <section className="block-widget-banner layout-1">
              <div className="section-container">
                <SecondBannerSection />
              </div>
            </section>
            {/* Block video */}
            <section className="section section-padding background-1 section-mb-l">
              <div className="section-container">
                <VideoBanner />
              </div>
            </section>
            {/* Feature block */}
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

export default HomePage;
