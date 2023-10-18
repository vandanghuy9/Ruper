import BannerItem from "./BannerItem";
import WhiteButton from "../button/WhiteButton";
import { firstBanner as data } from "../../utils/data";
const FirstBannerSection = () => {
  return (
    <div className="block block-banners layout-1 banners-effect">
      <div className="section-row">
        <div className="section-column left sm-m-b">
          <div className="section-column-wrap">
            <div className="block-widget-wrap">
              <div className="block-widget-banner layout-1">
                <BannerItem
                  link={data[0]?.link}
                  imageSrc={data[0]?.imageSrc}
                  imgWidth={data[0].imgWidth}
                  imgHeight={data[0].imgHeight}
                >
                  <WhiteButton
                    href={data[0]?.link}
                    buttonText={data[0]?.buttonText}
                  />
                </BannerItem>
              </div>
            </div>
          </div>
        </div>
        <div className="section-column right">
          <div className="section-column-wrap">
            <div className="block-widget-wrap p-0">
              <div className="block-section m-b-15">
                <div className="section-container">
                  <div className="section-row">
                    <div className="section-column column-50 sm-m-b">
                      <div className="block-widget-wrap">
                        <div className="block-widget-banner layout-1">
                          <BannerItem
                            link={data[1]?.link}
                            imageSrc={data[1]?.imageSrc}
                            imgWidth={data[1].imgWidth}
                            imgHeight={data[1].imgHeight}
                          >
                            <WhiteButton
                              href={data[1]?.link}
                              buttonText={data[1]?.buttonText}
                            />
                          </BannerItem>
                        </div>
                      </div>
                    </div>
                    <div className="section-column column-50">
                      <div className="block-widget-wrap">
                        <div className="block-widget-banner layout-1">
                          <BannerItem
                            link={data[2]?.link}
                            imageSrc={data[2]?.imageSrc}
                            imgWidth={data[2].imgWidth}
                            imgHeight={data[2].imgHeight}
                          >
                            <WhiteButton
                              href={data[2]?.link}
                              buttonText={data[2]?.buttonText}
                            />
                          </BannerItem>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-section">
                <div className="section-container">
                  <div className="section-row">
                    <div className="section-column">
                      <div className="block-widget-wrap">
                        <div className="block-widget-banner layout-1">
                          <BannerItem
                            link={data[3]?.link}
                            imageSrc={data[3]?.imageSrc}
                            imgWidth={data[3].imgWidth}
                            imgHeight={data[3].imgHeight}
                          >
                            <WhiteButton
                              href={data[3]?.link}
                              buttonText={data[3]?.buttonText}
                            />
                          </BannerItem>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBannerSection;
