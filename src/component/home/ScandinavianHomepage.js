import { GothicCarousel, ProductCarousel, Testimonial } from "@component/slider";
import { ScandinavianCategoryBanner, ScandinavianSecondBanner } from "@component/banner";
import FeatureSection from "@component/feature/FeatureSection";
import Link from "next/link";
const ScandinavianHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section-small-padding m-t-10 m-b-10">
              <GothicCarousel />
            </section>
            <section className="section section-small-padding">
              <div className="block block-product-cats layout-6 x-small-space">
                <ScandinavianCategoryBanner />
              </div>
            </section>
            <section className="section section-padding">
              <div className="section-container">
                <div className="block block-products slider">
                  <div className="block-widget-wrap">
                    <div className="block-title title-underline">
                      <h2>New Arrivals</h2>
                      <div className="title-right">
                        <Link href="/shop">View all new arrivals</Link>
                      </div>
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
            <section className="section top-border p-t-70 m-b-70">
              <div className="block block-banners banners-effect">
                <div className="block-title title-big">
                  <h2>Rupper Exclusive Online Furniture Store</h2>
                </div>
                <div className="block-content">
                  <ScandinavianSecondBanner />
                </div>
              </div>
            </section>
            <Testimonial />
            <section className="section section-padding top-border p-t-70 m-b-70">
              <div className="section-container">
                <FeatureSection isNoBorder={true} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScandinavianHomepage;
