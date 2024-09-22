import { CleanPageSlider } from "../slider";
import { CleanFirstBannerSection } from "@component/banner";
import ProductGridCard from "../product/ProductGridCard";
import Image from "next/image";
import Link from "next/link";
import WhiteButton from "@component/button/WhiteButton";
import { Testimonial } from "@component/slider";
import FeatureSection from "@component/feature/FeatureSection";
import { cleanPageFirstBanner } from "@utils/data";
const CleanHomepage = ({ products }) => {
  console.log(products);
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
                                <div
                                  className="item-lookbook"
                                  style={{
                                    height: "30px",
                                    width: "30px",
                                    left: "78.37%",
                                    top: "50%",
                                  }}>
                                  <span className="number-lookbook">1</span>
                                  <div className="content-lookbook" style={{ right: 33, top: 10 }}>
                                    <div className="item-thumb">
                                      <Link href={`/product/${products[0]?._id}`}>
                                        <Image
                                          width={1000}
                                          height={1000}
                                          src={products[0]?.imageUrl[0]}
                                          alt={products[0]?.name}
                                        />
                                      </Link>
                                    </div>
                                    <div className="content-lookbook-bottom">
                                      <div className="item-title">
                                        <Link href={`/product/${products[0]?._id}`}>
                                          {products[0]?.name}
                                        </Link>
                                      </div>
                                      <span className="price">
                                        {products[0].discount ? (
                                          <>
                                            <del>
                                              <span>${products[0].price}</span>
                                            </del>
                                            <ins>
                                              <span>
                                                $
                                                {Math.ceil(
                                                  (products[0].price *
                                                    (100 - products[0].discount)) /
                                                    100
                                                )}
                                              </span>
                                            </ins>
                                          </>
                                        ) : (
                                          <>${products[0].price}</>
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="item-lookbook"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    left: "34.06%",
                                    top: "74.22%",
                                  }}>
                                  <span className="number-lookbook">1</span>
                                  <div
                                    className="content-lookbook"
                                    style={{ left: 33, bottom: 10 }}>
                                    <div className="item-thumb">
                                      <Link href={`/product/${products[1]?._id}`}>
                                        <Image
                                          width={1000}
                                          height={1000}
                                          src={products[1]?.imageUrl[0]}
                                          alt={products[1]?.name}
                                        />
                                      </Link>
                                    </div>
                                    <div className="content-lookbook-bottom">
                                      <div className="item-title">
                                        <Link href={`/product/${products[1]?._id}`}>
                                          {products[1]?.name}
                                        </Link>
                                      </div>
                                      <span className="price">
                                        {products[1].discount ? (
                                          <>
                                            <del>
                                              <span>${products[1].price}</span>
                                            </del>
                                            <ins>
                                              <span>
                                                $
                                                {Math.ceil(
                                                  (products[1].price *
                                                    (100 - products[1].discount)) /
                                                    100
                                                )}
                                              </span>
                                            </ins>
                                          </>
                                        ) : (
                                          <>${products[1].price}</>
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
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
