import React from "react";
import BannerItem from "../BannerItem";
import { gothicPageFirstBanner as data } from "@utils/data";
import FirstBannerItem from "../home-clean/FirstBannerItem";
import Link from "next/link";
import Image from "next/image";

const GothicFirstBanner = () => {
  return (
    <div className="block block-banners banners-effect">
      <div className="block-widget-wrap">
        <div className="row">
          {data.map(({ img, image, title, link }, index) => (
            <div className="col-md-4 sm-m-b" key={index}>
              <div className={`block-widget-banner layout-12`}>
                <BannerItem
                  imageSrc={image}
                  imgWidth={img.width}
                  imgHeight={img.height}
                  link={link}>
                  <Link className="link-title" href="/shop">
                    <h3 className="title-banner">{title}</h3>
                  </Link>
                </BannerItem>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GothicFirstBanner;
