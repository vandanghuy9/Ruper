import React from "react";
import { modernSecondBanner } from "@utils/data";
import BannerItem from "../BannerItem";
import Link from "next/link";
const ModernSecondBannerSection = () => {
  return (
    <div className="block block-banners layout-7 banners-effect">
      <div className="block-widget-wrap">
        <div className="row">
          {modernSecondBanner.map((item) => (
            <div className="col-md-4 sm-m-b-50" key={item.title}>
              <div className="block-widget-banner layout-9">
                <BannerItem imageSrc={item.image} imgHeight={492} imgWidth={492} link={item.link}>
                  <Link className="link-title" href={item.link}>
                    <h3 className="title-banner">{item.title}</h3>
                  </Link>
                  <div className="banner-image-description">{item.description}</div>
                </BannerItem>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernSecondBannerSection;
