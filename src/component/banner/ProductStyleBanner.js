import Image from "next/image";
import Link from "next/link";
import { productStyleBanner } from "@utils/data";
const ProductStyleBanner = () => {
  return (
    <div className="block block-product-cats layout-2">
      <div className="block-widget-wrap">
        <div className="block-title">
          <h2>Shop by Style</h2>
        </div>
        <div className="block-content">
          <div className="row">
            {productStyleBanner.map(({ link, image, img: { width, height }, title }) => (
              <div className="col-md-3 sm-m-b-30" key={title}>
                <div className="cat-item">
                  <div className="cat-image">
                    <Link href={link}>
                      <Image width={width} height={height} src={image} alt="Product Category" />
                    </Link>
                  </div>
                  <div className="cat-title">
                    <Link href={link}>
                      <h3>{title}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStyleBanner;
