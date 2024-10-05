import React from "react";
import Image from "next/image";
import ProductItemLookbook from "@component/product/ProductItemLookbook";
import Link from "next/link";
const GothicLookbook = ({ products }) => {
  return (
    <div className="block block-lookbook layout-3 no-space">
      <div className="background-overlay"></div>
      <div className="row">
        <div className="col-lg-6" style={{ zIndex: 1 }}>
          <div className="lookbook-intro-wrap">
            <div className="lookbook-intro">
              <h2 className="title">
                Exclusive to Online Prints
                <br />
                &amp; Rugs Range
              </h2>
              <div className="description">
                Shop from the comfort of home and order with the click of a button. Our brand-new
                exclusive to online print and rug collection showcases so much more than we have
                in-store.
              </div>
              <Link href={"/shop"} className="button button-black">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="lookbook-wrap default">
            <div className="lookbook-container">
              <div className="lookbook-content">
                <div className="item">
                  <Image width={961} height={668} src="/banner/lookbook-5.jpg" alt="Look Book" />
                  <ProductItemLookbook
                    product={products[0]}
                    containerStyle={{ left: "43.91%", top: "72.01%" }}
                    contentStyle={{ left: 33, bottom: 10 }}
                  />
                  <ProductItemLookbook
                    product={products[1]}
                    containerStyle={{ left: "68.68%", top: "29.34%" }}
                    contentStyle={{ right: 33, top: 10 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GothicLookbook;
