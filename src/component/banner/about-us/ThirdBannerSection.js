import Link from "next/link";
import Image from "next/image";
import BannerPic from "public/banner/about-us-3.jpg";
import BannerLayout from "./BannerLayout";
import { MdOutlineVerified } from "react-icons/md";
const ThirdBannerSection = () => {
  return (
    <BannerLayout>
      <div className="block block-banners banners-effect">
        <div className="block-widget-wrap">
          <div className="block-content">
            <div className="block-widget-banner layout-16 no-space">
              <div className="banners">
                <div className="row">
                  <div className="col-md-6 banner-infor background-2">
                    <div className="banner-wrapper-infor">
                      <div className="info">
                        <div className="content">
                          <div className="banner-icon">
                            <MdOutlineVerified />
                          </div>
                          <Link className="link-title" href="/blog">
                            <h3 className="title-banner">
                              Quality At Every Step
                            </h3>
                          </Link>
                          <div className="banner-image-description">
                            Rest easy. From choice materials and expert hands,
                            to precision tools and tests, we ensure your product
                            is made of hardy stuff
                          </div>
                          <Link className="button button-outline" href="/blog">
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner-image">
                      <Link href="/shop">
                        <Image src={BannerPic} alt="Banner Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default ThirdBannerSection;
