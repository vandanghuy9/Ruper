import BannerItem from "./BannerItem";
import SecondBannerContent from "./SecondBannerContent";
import { secondBanner as data } from "../../utils/data";
const SecondBannerSection = () => {
  return (
    <div className="block block-banners layout-2 banners-effect">
      <div className="section-row">
        <div className="section-column left sm-m-b">
          <div className="section-column-wrap">
            <div className="block-widget-wrap">
              <div className="block-widget-banner layout-2">
                <BannerItem
                  link={data[0]?.link}
                  imageSrc={data[0]?.imageSrc}
                  imgHeight={data[0]?.imgHeight}
                  imgWidth={data[0]?.imgWidth}
                >
                  <SecondBannerContent
                    bannerTitle={data[0]?.bannerTitle}
                    desc={data[0]?.desc}
                    buttonText={data[0]?.buttonText}
                    link={data[0]?.link}
                  />
                </BannerItem>
              </div>
            </div>
          </div>
        </div>

        <div className="section-column right">
          <div className="section-column-wrap">
            <div className="block-widget-wrap">
              <div className="block-widget-banner layout-3">
                <BannerItem
                  link={data[1]?.link}
                  imageSrc={data[1]?.imageSrc}
                  imgHeight={data[1]?.imgHeight}
                  imgWidth={data[1]?.imgWidth}
                >
                  <SecondBannerContent
                    bannerTitle={data[1]?.bannerTitle}
                    desc={data[1]?.desc}
                    buttonText={data[1]?.buttonText}
                    link={data[1]?.link}
                  />
                </BannerItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondBannerSection;
