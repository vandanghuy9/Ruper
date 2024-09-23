import React from "react";
import { GridPageCarousel } from "@component/slider";
import { GridFirstBanner, BlogSection, GridNewsLetterBlock } from "@component/banner";
import ProductGridCard from "../product/ProductGridCard";
import ProductItemLookBook from "../product/ProductItemLookbook";
import Image from "next/image";
import Link from "next/link";
import FeatureSectionLayoutTwo from "@component/feature/FeatureSectionLayoutTwo";
const GridHomePage = ({ products, blogList }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section section-padding m-b-60">
              <div className="section-container">
                <div className="section-row">
                  <GridPageCarousel />
                  <GridFirstBanner />
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-90">
              <div className="section-container">
                <div className="block block-products loadmore">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Weekly Selection</h2>
                      <div className="sub-title">
                        Shop living room furniture, crafted by designers all over the world
                      </div>
                    </div>
                    <div className="block-content">
                      <div className="products-list grid">
                        <div className="row">
                          {products?.map((product, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                              <ProductGridCard product={product} homepage={false} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding m-b-80">
              <div className="section-container">
                <div className="block block-lookbook layout-2">
                  <div className="block-widget-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="lookbook-wrap default">
                          <div className="lookbook-container">
                            <div className="lookbook-content">
                              <div className="item">
                                <Image
                                  width={598}
                                  height={594}
                                  src={"/banner/lookbook-2.jpg"}
                                  alt="Look Book 1"
                                />
                                <ProductItemLookBook
                                  product={products[0]}
                                  containerStyle={{ left: "45.99%", top: "48.82%" }}
                                  contentStyle={{ left: 33, top: 10 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="lookbook-wrap default right">
                          <div className="lookbook-container">
                            <div className="lookbook-intro-wrap position-center text-center">
                              <div className="lookbook-intro">
                                <h2 className="title">Shop the look</h2>
                                <h4 className="sub-title">
                                  Shop living room furniture, crafted by designers all over the
                                  world
                                </h4>
                                <Link href="/shop" className="button btn-underline center">
                                  Shop Collection
                                </Link>
                              </div>
                            </div>

                            <div className="lookbook-content">
                              <div className="item">
                                <Image
                                  width={599}
                                  height={671}
                                  src={"/banner/lookbook-3.jpg"}
                                  alt="Look Book 1"
                                />
                                <ProductItemLookBook
                                  product={products[1]}
                                  containerStyle={{ left: "16.19%", top: "35.77%" }}
                                  contentStyle={{ left: 33, top: 10 }}
                                />
                                <ProductItemLookBook
                                  product={products[2]}
                                  containerStyle={{ left: "73.62%", top: "71.39%" }}
                                  contentStyle={{ right: 33, bottom: 10 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-padding background-3 p-t-70 p-b-70 m-b-70">
              <div className="section-container">
                <FeatureSectionLayoutTwo />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <div className="section-container">
                <div className="block block-posts layout-2">
                  <div className="block-widget-wrap">
                    <div className="block-title">
                      <h2>Our Blog</h2>
                      <div className="sub-title">
                        Shop living room furniture, crafted by designers all over the world
                      </div>
                    </div>
                    <BlogSection />
                  </div>
                </div>
              </div>
            </section>
            <GridNewsLetterBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridHomePage;
