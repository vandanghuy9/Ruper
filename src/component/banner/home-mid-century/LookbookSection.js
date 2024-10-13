import Image from "next/image";
import ProductItemLookbook from "@component/product/ProductItemLookbook";
const MidCenturyLookbookSection = ({ products }) => {
  return (
    <div className="block block-lookbook">
      <div className="lookbook-wrap default">
        <div className="lookbook-container">
          <div className="lookbook-content">
            <div className="item">
              <Image width={1920} height={809} src="/banner/lookbook-6.jpg" alt="Look Book" />
              <ProductItemLookbook
                product={products[0]}
                containerStyle={{ left: "18.8%", top: "45.74%" }}
                contentStyle={{ left: 33, bottom: 10 }}
              />
              <ProductItemLookbook
                product={products[1]}
                containerStyle={{ left: "36.25%", top: "52.9%" }}
                contentStyle={{ left: 33, bottom: 10 }}
              />
              <ProductItemLookbook
                product={products[2]}
                containerStyle={{ left: "69.79%", top: "36.34%" }}
                contentStyle={{ right: 33, bottom: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidCenturyLookbookSection;
