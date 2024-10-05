import React from "react";
import { MinimalCarousel, ProductCarousel, BrandCarousel } from "@component/slider";
import ProductCategoryTab from "@component/product-tab/ProductCategoryTab";
import {
  MinimalFirstBannerSection,
  LookbookSection,
  MinimalNewsLetterBlock,
} from "@component/banner";
const MinimalHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section section-padding m-b-60">
              <div className="section-container">
                <div className="block-widget-wrap">
                  <MinimalCarousel />
                </div>
              </div>
            </section>
            <section className="section section-padding">
              <div className="section-container">
                <ProductCategoryTab products={products} />
              </div>
            </section>
            <section className="section section-padding m-b-80">
              <div className="section-container">
                <MinimalFirstBannerSection />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block-widget-wrap">
                  <LookbookSection products={products} />
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-products slider">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>New Products</h2>
                    </div>
                    <div className="block-content">
                      <div className="content-product-list slick-wrap">
                        <div className="slick-sliders products-list grid">
                          <ProductCarousel productSet={products} homepage={false} />
                        </div>
                      </div>
                    </div>
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

export default MinimalHomepage;
