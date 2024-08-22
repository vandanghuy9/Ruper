import Link from "next/link";
import Image from "next/image";
import BannerFirstPic from "public/banner/about-us-1.jpg";
import BannerLayout from "./BannerLayout";
const FirstBannerSection = () => {
  return (
    <BannerLayout>
      <div className="block block-banners banners-effect">
        <div className="block-widget-wrap">
          <div className="block-widget-banner">
            <div className="bg-banner">
              <div className="banner-wrapper banners">
                <div className="banner-image">
                  <Link href="/shop?layout=grid&sidebar=left">
                    <Image src={BannerFirstPic} alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default FirstBannerSection;
