import React from "react";
import Link from "next/link";
import Image from "next/image";
const FirstBannerItem = ({ item }) => {
  const { image, title } = item;
  return (
    <div className="col-md-4 sm-m-b">
      <div className="block-widget-banner layout-4">
        <div className="bg-banner">
          <div className="banner-wrapper banners">
            <div className="banner-image">
              <Link href="/shop">
                <Image width={568} height={607} src={image} alt="Banner Image" />
              </Link>
            </div>
            <div className="banner-wrapper-infor">
              <div className="info">
                <div className="content">
                  <Link className="link-title" href="shop-grid-left.html">
                    <h3 className="title-banner">{title}</h3>
                  </Link>
                  <Link className="button btn-underline" href="/shop">
                    shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBannerItem;
