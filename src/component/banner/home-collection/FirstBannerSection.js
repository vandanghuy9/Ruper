import React from "react";
import FirstBannerItem from "../home-clean/FirstBannerItem";
import { collectionPageFirstBanner } from "@utils/data";
const FirstBannerSection = () => {
  return (
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
  );
};

export default FirstBannerSection;
