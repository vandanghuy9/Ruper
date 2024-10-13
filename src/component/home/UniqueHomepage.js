import { UniquePageCarousel, Testimonial, StylishInstagramCarousel } from "@component/slider";
import UniqueProductCategoryTab from "@component/product-tab/UniqueProductCategoryTab";
import { UniqueCountdownSection, UniqueNewsLetterBlock } from "@component/banner";
import BannerItem from "@component/banner/BannerItem";
import WhiteButton from "@component/button/WhiteButton";
import FeatureSection from "@component/feature/FeatureSection";
const UniqueHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section section-padding m-b-60">
              <div className="section-container">
                <div className="block-widget-wrap">
                  <UniquePageCarousel />
                </div>
              </div>
            </section>
            <section className="section section-padding">
              <div className="section-container large-space">
                <div className="block-widget-wrap">
                  <div className="row">
                    <div className="col-md-6 md-content-full-height">
                      <div className="block block-banners">
                        <div className="block-widget-banner layout-10">
                          <BannerItem
                            imageSrc={"/banner/banner-21.jpg"}
                            imgHeight={839}
                            imgWidth={657}
                            link={"/shop"}>
                            <h5 className="subtitle-banner">Summer Collection</h5>
                            <h3 className="title-banner">Made for laze-ins</h3>
                            <WhiteButton buttonText={"SHOP NOW"} href={"/shop"} />
                          </BannerItem>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-t-30">
                        <UniqueProductCategoryTab products={products} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section background-5 p-t-50 p-b-50 m-b-70">
              <div className="section-container small-space">
                <UniqueCountdownSection />
              </div>
            </section>
            <section className="section section-padding">
              <div className="section-container large-space">
                <div className="block-widget-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-t-30">
                        <UniqueProductCategoryTab products={products} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="block block-banners md-full-height">
                        <div className="block-widget-banner layout-10">
                          <BannerItem
                            imageSrc={"/banner/banner-22.jpg"}
                            imgHeight={839}
                            imgWidth={657}
                            link={"/shop"}>
                            <h5 className="subtitle-banner">Lighting Collection</h5>
                            <h3 className="title-banner">Right on Trend</h3>
                            <WhiteButton buttonText={"SHOP NOW"} href={"/shop"} />
                          </BannerItem>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding newsletter-background m-b-70">
              <div className="section-container">
                <UniqueNewsLetterBlock />
              </div>
            </section>
            <Testimonial />
            <section className="section section-padding top-border p-t-70 m-b-70">
              <div className="section-container">
                <FeatureSection isNoBorder={true} />
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

export default UniqueHomepage;
