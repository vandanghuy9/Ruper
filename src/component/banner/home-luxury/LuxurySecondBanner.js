import BannerItem from "../BannerItem";
import { luxurySecondBanner as data } from "@utils/data";
import Link from "next/link";
const LuxurySecondBanner = () => {
  return (
    <div className="block block-banners banners-effect">
      <div className="block-widget-wrap">
        <div className="row">
          <div className="col-md-6">
            <div className="block-widget-banner layout-13 m-b-15">
              <BannerItem
                imageSrc={data[0].imageSrc}
                link={data[0].link}
                imgHeight={data[0].imgHeight}
                imgWidth={data[0].imgWidth}>
                <Link className="link-title" href={data[0].link}>
                  <h3 className="title-banner">
                    {data[0].title} <br /> {data[0].subtitle}{" "}
                  </h3>
                </Link>
                <div className="banner-image-description">{data[0].description}</div>
                <Link className="button button-outline" href={data[0].link}>
                  SHOP NOW
                </Link>
              </BannerItem>
            </div>
          </div>
          <div className="col-md-6">
            <div className="block-widget-banner layout-13">
              <BannerItem
                imageSrc={data[1].imageSrc}
                link={data[1].link}
                imgHeight={data[1].imgHeight}
                imgWidth={data[1].imgWidth}>
                <Link className="link-title" href={data[1].link}>
                  <h3 className="title-banner">
                    {data[1].title} <br /> {data[1].subtitle}
                  </h3>
                </Link>
                <div className="banner-image-description">{data[1].description}</div>
                <Link className="button button-outline" href={data[1].link}>
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

export default LuxurySecondBanner;
