"use client";
import { useState } from "react";
import Image from "next/image";
const ProductImage = ({ thumbnails }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="row">
      <div className="col-md-2">
        <div className="content-thumbnail-scroll">
          <div className="image-thumbnail slick-carousel slick-vertical">
            {thumbnails.map((item, i) => (
              <div className="img-item slick-slide" key={i}>
                <span
                  className="img-thumbnail-scroll"
                  onMouseEnter={() => setIndex(i)}
                >
                  <Image
                    width={600}
                    height={600}
                    alt="thumbnail"
                    src={item}
                  ></Image>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <div className="scroll-image main-image">
          <div className="image-additional slick-carousel">
            <div className="img-item slick-slide">
              <Image
                width={900}
                height={900}
                src={thumbnails[index]}
                alt="hello"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductImage;
