import FeatureSectionLayoutFour from "@component/feature/FeatureSectionLayoutFour";
import WhiteButton from "@component/button/WhiteButton";
import {
  LuxuryProductCategoryBanner,
  LuxurySecondBanner,
  BlogSection,
  GridNewsLetterBlock,
  ProductStyleBanner,
  MidCenturyLookbookSection,
  NewsLetterForm,
} from "@component/banner";
import {
  MidCenturyCarousel,
  LuxuryCarousel,
  ProductCategorySlider,
  TestimonialCardCarousel,
} from "@component/slider";
import StylishProductCategoryTab from "@component/product-tab/StylishProductCategoryTab";
import ProductCategoryTab from "@component/product-tab/ProductCategoryTab";
import FeatureSection from "@component/feature/FeatureSection";
import Image from "next/image";
const MidCenturyHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section m-b-70">
              <MidCenturyCarousel />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <ProductStyleBanner />
              </div>
            </section>
            <section className="section section-padding background-11 p-t-70 p-b-70 m-b-70">
              <div className="section-container">
                <div className="block block-product-cats slider">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Shop by Department</h2>
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
              <div className="section-container">
                <ProductCategoryTab products={products} />
              </div>
            </section>
            <section className="section m-b-70">
              <MidCenturyLookbookSection products={products} />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <FeatureSection />
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidCenturyHomepage;
