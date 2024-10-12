import { luxuryProductCategoryBanner } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
const LuxuryProductCategoryBanner = () => {
  return (
    <div className="block block-product-cats layout-4">
      <div className="block-widget-wrap">
        <div className="block-content">
          <div className="row">
            {luxuryProductCategoryBanner.map((item, index) => (
              <div className="col-md-3 col-sm-6 sm-m-b-30" key={index}>
                <div className="item-product-cat-content">
                  <Link href={item.link}>
                    <div className="item-image">
                      <Image
                        width={item.img.width}
                        height={item.img.height}
                        src={item.image}
                        alt="bed-bath"
                      />
                    </div>
                  </Link>
                  <div className="product-cat-content-info">
                    <h2 className="item-title">
                      <Link href={item.link}>{item.title}</Link>
                    </h2>
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

export default LuxuryProductCategoryBanner;
