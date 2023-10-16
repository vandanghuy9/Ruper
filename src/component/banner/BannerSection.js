import BannerItem from "./BannerItem";

const BannerSection = ({data}) => {
  return (
    <div className="block block-banners layout-1 banners-effect">
      <div className="section-row">
        <div className="section-column left sm-m-b">
          <div className="section-column-wrap">
            <div className="block-widget-wrap">
              <BannerItem
                link={data[0]?.link}
                imageSrc={data[0]?.imageSrc}
                buttonText={data[0]?.buttonText}
              />
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
                        <BannerItem
                          link={data[1]?.link}
                          imageSrc={data[1]?.imageSrc}
                          buttonText={data[1]?.buttonText}
                        />
                      </div>
                    </div>
                    <div className="section-column column-50">
                      <div className="block-widget-wrap">
                        <BannerItem
                          link={data[2]?.link}
                          imageSrc={data[2]?.imageSrc}
                          buttonText={data[2]?.buttonText}
                        />
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
                        <BannerItem
                          link={data[3]?.link}
                          imageSrc={data[3]?.imageSrc}
                          buttonText={data[3]?.buttonText}
                        />
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

export default BannerSection;