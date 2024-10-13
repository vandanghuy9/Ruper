import Image from "next/image";
import Link from "next/link";

const RetroSecondBanner = () => {
  return (
    <div className="row sm-m-0">
      <div className="col-md-6 sm-m-b-50 sm-p-0">
        <div className="block block-image text-center position-relative">
          <Image width={671} height={503} src={"/banner/newsletter-2.jpg"} alt="" />
          <Image
            width={106}
            height={105}
            src={"/logo-intro.png"}
            alt=""
            className="animation-round position-v-top position-h-center"
          />
        </div>
      </div>
      <div className="col-md-6 sm-p-0">
        <div className="block block-lookbook layout-3 position-v-center">
          <div className="lookbook-intro-wrap m-l-0">
            <div className="lookbook-intro">
              <h2 className="title">
                Exclusive to Online Prints
                <br /> &amp; Rugs Range
              </h2>
              <div className="description">
                Shop from the comfort of home and order with the click of a button. Our brand-new
                exclusive to online print and rug collection showcases so much more than we have
                in-store.
              </div>
              <Link href="/shop" className="button button-black">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroSecondBanner;
