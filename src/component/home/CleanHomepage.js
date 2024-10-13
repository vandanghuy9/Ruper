import { CleanPageSlider } from "../slider";
import { CleanFirstBannerSection } from "@component/banner";
import ProductGridCard from "../product/ProductGridCard";
import Image from "next/image";
import Link from "next/link";
import WhiteButton from "@component/button/WhiteButton";
import { Testimonial } from "@component/slider";
import FeatureSection from "@component/feature/FeatureSection";
import ProductItemLookbook from "@component/product/ProductItemLookbook";
const CleanHomepage = ({ products }) => {
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <section className="section section-padding m-b-15">
              <div className="section-container large">
                <CleanPageSlider />
              </div>
            </section>
            <section className="section section-padding m-b-70">
              <CleanFirstBannerSection />
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
            <section className="section section-padding m-b-70">
              <div className="section-container large">
                <div className="block-widget-wrap">
                  <div className="block block-lookbook no-space">
                    <div className="background-overlay"></div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="lookbook-wrap default">
                          <div className="lookbook-container">
                            <div className="lookbook-content">
                              <div className="item">
                                <Image
                                  width={869}
                                  height={702}
                                  src="/banner/lookbook-1.jpg"
                                  alt="Look Book 1"
                                />
                                <ProductItemLookbook
                                  product={products[0]}
                                  containerStyle={{ left: "78.37%", top: "50%" }}
                                  contentStyle={{ right: 33, top: 10 }}
                                />
                                <ProductItemLookbook
                                  product={products[1]}
                                  containerStyle={{ left: "34.06%", top: "74.22%" }}
                                  contentStyle={{ left: 33, bottom: 10 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" style={{ zIndex: 1 }}>
                        <div className="lookbook-intro-wrap position-center text-center">
                          <div className="lookbook-intro">
                            <h4 className="sub-title">Discover the new Koti Sofa</h4>
                            <h2 className="title">
                              Like lounging on
                              <br />a cloud
                            </h2>
                            <WhiteButton buttonText={"SHOP NOW"} href={"/shop"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Testimonial />
            <section className="section section-padding top-border p-t-70 m-b-70">
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

export default CleanHomepage;
