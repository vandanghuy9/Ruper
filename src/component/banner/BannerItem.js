import Link from "next/link";
import Image from "next/image";
import WhiteButton from "../button/WhiteButton";
const BannerItem = ({ link, imageSrc, buttonText }) => {
  return (
    <div className="block-widget-banner layout-1">
      <div className="bg-banner">
        <div className="banner-wrapper banners">
          <div className="banner-image">
            <Link href="/shop-grid-left.html">
              <Image
                src={imageSrc}
                width={571}
                height={622}
                alt="Banner Image"
              />
            </Link>
          </div>
          <div className="banner-wrapper-infor">
            <div className="info">
              <div className="content">
                <WhiteButton link={link} buttonText={buttonText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
