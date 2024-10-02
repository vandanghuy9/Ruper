import { SplitCarousel, BrandCarousel, ProductCategorySlider } from "@component/slider";
import {
  ModernFirstBannerSection,
  ModernFeatureSection,
  ModernSecondBannerSection,
  BlogSection,
  InstagramSection,
  SplitBlogSection,
} from "@component/banner";
import FeatureSection from "@component/feature/FeatureSection";
import ProductGridCard from "../product/ProductGridCard";

const SplitHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section m-b-0">
              <SplitCarousel />
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
            <section className="section section-padding m-b-70">
              <div className="section-container large">
                <div className="block block-products loadmore">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Latest Products</h2>
                    </div>
                    <div className="block-content">
                      <div className="products-list grid">
                        <div className="row">
                          {products?.map((product, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                              <div className="items">
                                <ProductGridCard product={product} homepage={false} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section no-space m-b-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="block block-banners background-img full-height">
                    <div className="block-widget-banner layout-11 full-height">
                      <div className="bg-banner">
                        <div className="banner-wrapper banners">
                          <div className="banner-wrapper-infor">
                            <div className="info">
                              <div className="content">
                                <h3>Our Journal</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="column-background-wrap">
                    <SplitBlogSection />
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

export default SplitHomepage;
