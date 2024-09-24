import React from "react";
import BannerItem from "../BannerItem";
import WhiteButton from "@component/button/WhiteButton";
import { modernFirstBanner as data } from "@utils/data";
import Link from "next/link";
const ModernFirstBannerSection = () => {
  return (
    <div className="block block-banners layout-6 banners-effect no-space">
      <div className="row">
        <div className="col-md-6 left">
          <div className="block-widget-banner layout-8">
            <BannerItem
              link={data[0]?.link}
              imageSrc={data[0]?.imageSrc}
              imgWidth={data[0].imgWidth}
              imgHeight={data[0].imgHeight}>
              <div className="banner-image-subtitle">NEW COLLECTION</div>
              <Link className="link-title" href={data[0]?.link}>
                <h3 className="title-banner">Living Room</h3>
              </Link>
            </BannerItem>
          </div>
        </div>
        <div className="col-md-6 right">
          <div className="row">
            <div className="col-md-12">
              <div className="block-widget-banner layout-8">
                <BannerItem
                  link={data[1]?.link}
                  imageSrc={data[1]?.imageSrc}
                  imgWidth={data[1].imgWidth}
                  imgHeight={data[1].imgHeight}>
                  <div className="banner-image-subtitle">FAVOURITE</div>
                  <Link className="link-title" href={data[1]?.link}>
                    <h3 className="title-banner">Dining & Kitchen</h3>
                  </Link>
                </BannerItem>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="block-widget-banner layout-8">
                <BannerItem
                  link={data[2]?.link}
                  imageSrc={data[2]?.imageSrc}
                  imgWidth={data[2].imgWidth}
                  imgHeight={data[2].imgHeight}>
                  <div className="banner-image-subtitle">FREE SHIPPING</div>
                  <Link className="link-title" href={data[2]?.link}>
                    <h3 className="title-banner">Home Decor</h3>
                  </Link>
                </BannerItem>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-widget-banner layout-8">
                <BannerItem
                  link={data[3]?.link}
                  imageSrc={data[3]?.imageSrc}
                  imgWidth={data[3].imgWidth}
                  imgHeight={data[3].imgHeight}>
                  <div className="banner-image-subtitle"> 30% OFF</div>
                  <Link className="link-title" href={data[3]?.link}>
                    <h3 className="title-banner">Interior lighting</h3>
                  </Link>
                </BannerItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernFirstBannerSection;
