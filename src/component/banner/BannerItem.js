import Link from "next/link";
import Image from "next/image";
const BannerItem = ({ link, imageSrc, imgWidth, imgHeight, children }) => {
  return (
    <div className="bg-banner">
      <div className="banner-wrapper banners">
        <div className="banner-image">
          <Link href={link}>
            <Image
              src={imageSrc}
              width={imgWidth}
              height={imgHeight}
              alt="Banner Image"
            />
          </Link>
        </div>
        <div className="banner-wrapper-infor">
          <div className="info">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
