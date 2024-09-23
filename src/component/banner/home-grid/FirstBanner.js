import React from "react";
import Image from "next/image";
import Link from "next/link";

const FirstBanner = () => {
  return (
    <div className="section-column right">
      <div className="block-widget-wrap">
        <div className="block block-banners layout-5 banners-effect">
          <div className="block-widget-banner layout-6 m-b-15">
            <div className="bg-banner">
              <div className="banner-wrapper banners">
                <div className="banner-image">
                  <Link href="/shop">
                    <Image
                      width={707}
                      height={"349"}
                      src="/banner/banner-9.jpg"
                      alt="Banner Image"
                    />
                  </Link>
                </div>
                <div className="banner-wrapper-infor">
                  <div className="info">
                    <div className="content">
                      <Link className="link-title" href="/shop">
                        <h3 className="title-banner">Storage</h3>
                      </Link>
                      <div className="banner-image-description">
                        Crisp, Clean Dining Room Designs <br />
                        for Every Taste
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-widget-banner layout-6">
            <div className="bg-banner">
              <div className="banner-wrapper banners">
                <div className="banner-image">
                  <Link href="/shop">
                    <Image
                      width={"707"}
                      height={"349"}
                      src="/banner/banner-10.jpg"
                      alt="Banner Image"
                    />
                  </Link>
                </div>
                <div className="banner-wrapper-infor right">
                  <div className="info">
                    <div className="content">
                      <Link className="link-title" href="/shop">
                        <h3 className="title-banner">Lighting</h3>
                      </Link>
                      <div className="banner-image-description">
                        Bring some light to your life with our
                        <br /> lighting designs
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

export default FirstBanner;
