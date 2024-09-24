import BannerItem from "../BannerItem";
import { minimalFirstBanner } from "@utils/data";
import Link from "next/link";
const MinimalFirstBannerSection = () => {
  return (
    <div className="block block-banners layout-5 banners-effect">
      <div className="block-widget-wrap">
        <div className="row">
          <div className="col-md-6 sm-m-b-50">
            <div className="block-widget-banner layout-7">
              <BannerItem
                imageSrc={minimalFirstBanner[0].imageSrc}
                link={minimalFirstBanner[0].link}
                imgHeight={minimalFirstBanner[0].imgHeight}
                imgWidth={minimalFirstBanner[0].imgWidth}>
                <Link className="link-title" href={minimalFirstBanner[0].link}>
                  <h3 className="title-banner">
                    {minimalFirstBanner[0].title} <br /> {minimalFirstBanner[0].subtitle}{" "}
                  </h3>
                </Link>
                <div className="banner-image-description">{minimalFirstBanner[0].description}</div>
                <Link className="button button-outline" href={minimalFirstBanner[0].link}>
                  SHOP NOW
                </Link>
              </BannerItem>
            </div>
          </div>
          <div className="col-md-6 sm-m-b-50">
            <div className="block-widget-banner layout-7">
              <BannerItem
                imageSrc={minimalFirstBanner[1].imageSrc}
                link={minimalFirstBanner[1].link}
                imgHeight={minimalFirstBanner[1].imgHeight}
                imgWidth={minimalFirstBanner[1].imgWidth}>
                <Link className="link-title" href={minimalFirstBanner[1].link}>
                  <h3 className="title-banner">{minimalFirstBanner[1].title}</h3>
                </Link>
                <div className="banner-image-description">{minimalFirstBanner[1].description}</div>
                <Link className="button button-outline" href={minimalFirstBanner[1].link}>
                  SHOP NOW
                </Link>
              </BannerItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalFirstBannerSection;
