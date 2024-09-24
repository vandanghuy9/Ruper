import React from "react";
import Image from "next/image";
import ProductItemLookbook from "@component/product/ProductItemLookbook";
const LookbookSection = ({ products }) => {
  return (
    <div className="block block-lookbook">
      <div className="lookbook-wrap default">
        <div className="lookbook-container">
          <div className="lookbook-content">
            <div className="item">
              <Image width={869} height={702} src="/banner/lookbook-4.jpg" alt="Look Book" />
              <ProductItemLookbook
                product={products[0]}
                containerStyle={{ left: "29.55%", top: "54.27%" }}
                contentStyle={{ left: 33, bottom: 10 }}
              />
              <ProductItemLookbook
                product={products[1]}
                containerStyle={{ left: "53.69%", top: "79.16%" }}
                contentStyle={{ right: 33, bottom: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookbookSection;
