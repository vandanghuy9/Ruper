import React from "react";
import Slider from "../component/slider/Slider";
import BannerSection from "../component/banner/BannerSection";
import { firstBanner } from "@utils/data";
const HomePage = () => {
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
                <BannerSection data={firstBanner} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
