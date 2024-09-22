import React from "react";
import FirstBannerItem from "../home-clean/FirstBannerItem";
import { collectionPageFirstBanner } from "@utils/data";
const FirstBannerSection = () => {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">
        <div className="block block-banners layout-4 banners-effect">
          <div className="block-widget-wrap">
            <div className="row">
              {collectionPageFirstBanner.map((item) => (
                <FirstBannerItem key={item.title} item={item} layout={"layout-5"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBannerSection;
