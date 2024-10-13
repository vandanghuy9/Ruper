import BannerItem from "../BannerItem";
import WhiteButton from "@component/button/WhiteButton";
import { retroFirstBanner as data } from "@utils/data";
import Link from "next/link";
const RetroFirstBanner = () => {
  return (
    <div className="block block-banners banners-effect">
      <div className="no-space">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="block-widget-banner layout-15">
                <BannerItem
                  link={item?.link}
                  imageSrc={item?.imageSrc}
                  imgWidth={item.imgWidth}
                  imgHeight={item.imgHeight}>
                  <Link className="link-title" href={item?.link}>
                    <h3 className="title-banner">{item?.buttonText}</h3>
                  </Link>
                  <Link className="button btn-underline center" href={item?.link}>
                    Shop Collection
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

export default RetroFirstBanner;
