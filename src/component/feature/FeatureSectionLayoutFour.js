import React from "react";
import { featureCardData } from "@utils/data";

const FeatureSectionLayoutFour = () => {
  return (
    <div className="block block-feature layout-4">
      <div className="block-widget-wrap">
        <div className="row">
          {featureCardData.slice(0, 3).map((item, index) => (
            <div className="col-md-4 sm-m-b-20" key={index}>
              <div className="box">
                <div className="box-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="box-title-wrap">
                  <h3 className="box-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionLayoutFour;
