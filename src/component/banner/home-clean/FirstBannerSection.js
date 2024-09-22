import React from "react";
import FirstBannerItem from "./FirstBannerItem";
import { cleanPageFirstBanner } from "@utils/data";
const FirstBannerSection = () => {
  return (
    <div className="section-container large">
      <div className="block block-banners layout-3 banners-effect">
        <div className="block-widget-wrap small-space">
          <div className="row">
            {cleanPageFirstBanner.map((item) => (
              <FirstBannerItem key={item.title} item={item} layout={"layout-4"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBannerSection;
