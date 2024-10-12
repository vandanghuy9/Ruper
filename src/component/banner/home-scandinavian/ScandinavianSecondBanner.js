import { scandinavianPageSecondBanner as data } from "@utils/data";
import Link from "next/link";
import Image from "next/image";
const ScandinavianSecondBanner = () => {
  return (
    <div className="block-widget-banner layout-14 no-space">
      <div className="banners">
        {data.map(({ link, img: { width, height }, image, title, description }, index) =>
          index % 2 === 0 ? (
            <div className="row" key={index}>
              <div className="col-md-6">
                <div className="banner-image">
                  <Link href={link}>
                    <Image width={width} height={height} src={image} alt="Banner Image" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 banner-infor">
                <div className="banner-wrapper-infor">
                  <div className="info">
                    <div className="content">
                      <Link className="link-title" href="/shop">
                        <h3 className="title-banner">{title}</h3>
                      </Link>
                      <div className="banner-image-description">{description}</div>
                      <Link className="button btn-underline" href="/shop">
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row" key={index}>
              <div className="col-md-6 banner-infor">
                <div className="banner-wrapper-infor">
                  <div className="info">
                    <div className="content">
                      <Link className="link-title" href="/shop">
                        <h3 className="title-banner">{title}</h3>
                      </Link>
                      <div className="banner-image-description">{description}</div>
                      <Link className="button btn-underline" href="/shop">
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-image">
                  <Link href={link}>
                    <Image width={width} height={height} src={image} alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ScandinavianSecondBanner;
