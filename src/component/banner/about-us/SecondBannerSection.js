import Link from "next/link";
import Image from "next/image";
import BannerPic from "public/banner/about-us-2.jpg";
import BannerLayout from "./BannerLayout";
import { MdOutlineDesignServices } from "react-icons/md";
const SecondBannerSection = () => {
  return (
    <BannerLayout>
      <div className="block block-banners banners-effect">
        <div className="block-widget-wrap">
          <div className="block-title">
            <h2>Great Design For All</h2>
            <div className="sub-title">
              At Ruper, we create affordable designs for the modern home
            </div>
          </div>
          <div className="block-content">
            <div className="block-widget-banner layout-16 no-space">
              <div className="banners">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner-image">
                      <Link href="/shop">
                        <Image src={BannerPic} alt="Banner Image" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 banner-infor background-1">
                    <div className="banner-wrapper-infor">
                      <div className="info">
                        <div className="content">
                          <div className="banner-icon">
                            <MdOutlineDesignServices />
                          </div>
                          <Link className="link-title" href={"/blog"}>
                            <h3 className="title-banner">Designs You Desire</h3>
                          </Link>
                          <div className="banner-image-description">
                            We love creating furniture you want and will love
                            for years to come. Our designs feature a fusion of
                            unique styles that inspire us – from mid-century
                            modern to contemporary.
                          </div>
                          <Link className="button button-outline" href="/blog">
                            READ MORE
                          </Link>
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
    </BannerLayout>
  );
};

export default SecondBannerSection;
