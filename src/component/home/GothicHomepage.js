import {
  GothicCarousel,
  ProductCategorySlider,
  ProductCarousel,
  BrandCarousel,
} from "@component/slider";
import {
  GothicFirstBanner,
  GothicLookbook,
  GothicCategoryBanner,
  MinimalNewsLetterBlock,
} from "@component/banner";
const GothicHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content">
            <section className="section m-b-70">
              <GothicCarousel />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-product-cats slider">
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
              <div className="section-container">
                <GothicFirstBanner />
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
            <section className="section m-b-70">
              <GothicLookbook products={products} />
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-product-cats layout-2 items-equal">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Trending</h2>
                    </div>
                    <GothicCategoryBanner />
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding background-7 p-t-70 p-b-80 m-b-0">
              <div className="section-container">
                <MinimalNewsLetterBlock />
              </div>
            </section>
            <BrandCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GothicHomepage;
