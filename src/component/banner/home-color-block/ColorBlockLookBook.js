import Image from "next/image";
import ProductItemLookbook from "@component/product/ProductItemLookbook";
import Link from "next/link";
const ColorBlockLookBook = ({ products }) => {
  return (
    <div className="block-widget-wrap">
      <div className="block block-lookbook no-space color-white">
        <div className="background-overlay background-2"></div>
        <div className="row">
          <div className="col-md-6">
            <div className="lookbook-wrap default">
              <div className="lookbook-container">
                <div className="lookbook-content">
                  <div className="item">
                    <Image
                      width={703}
                      height={702}
                      src="/banner/lookbook-7.jpg"
                      alt="Look Book 1"
                    />
                    <ProductItemLookbook
                      product={products[0]}
                      containerStyle={{ left: "19.63%", top: "82.62%" }}
                      contentStyle={{ left: 33, bottom: 10 }}
                    />
                    <ProductItemLookbook
                      product={products[1]}
                      containerStyle={{ left: "83.91%", top: "74.79%" }}
                      contentStyle={{ right: 33, top: 10 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="lookbook-intro-wrap position-center text-center">
              <div className="lookbook-intro" style={{ zIndex: 1 }}>
                <h4 className="sub-title">Discover the new Koti Sofa</h4>
                <h2 className="title">
                  Like lounging on
                  <br /> a cloud
                </h2>
                <Link href="/shop" className="button button-white">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBlockLookBook;
