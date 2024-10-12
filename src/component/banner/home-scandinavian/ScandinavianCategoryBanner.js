import { scandinavianProductCategoryBanner as data } from "@utils/data";
import Image from "next/image";
import Link from "next/link";

const ScandinavianCategoryBanner = () => {
  return (
    <div className="block-content">
      <div className="row">
        {data.map(({ link, img: { width, height }, image, title }, index) => (
          <div className="col-lg-3 col-md-6 md-b-10" key={index}>
            <div className="cat-item">
              <div className="cat-image">
                <Link href={link}>
                  <Image width={width} height={height} src={image} alt="Product Category" />
                  <div className="cat-title">
                    <Link href={link} className="title">
                      {title}{" "}
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScandinavianCategoryBanner;
