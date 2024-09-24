import React from "react";
import CouchIcon from "./CouchIcon";
import BathtubIcon from "./BathtubIcon";
import LampIcon from "./LampIcon";
const ModernFeatureSection = () => {
  return (
    <div className="block block-feature layout-3 no-border">
      <div className="block-widget-wrap">
        <div className="row">
          <div className="col-md-4 sm-m-b-50">
            <div className="box">
              <div className="box-icon">
                <span>
                  <CouchIcon />
                </span>
              </div>
              <div className="box-title-wrap">
                <h3 className="box-title">Free full-service delivery</h3>
                <p className="box-description">
                  Sit back and relax! We put your new furniture into place and take all rubbish with
                  us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 sm-m-b-50">
            <div className="box">
              <div className="box-icon">
                <span>
                  <BathtubIcon />
                </span>
              </div>
              <div className="box-title-wrap">
                <h3 className="box-title">Worry-free purchasing</h3>
                <p className="box-description">
                  Your new FEST piece comes with a 3-Year Warranty, including at-home repair
                  service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="box-icon">
                <span>
                  <LampIcon />
                </span>
              </div>
              <div className="box-title-wrap">
                <h3 className="box-title">Choose from over 100 fabrics</h3>
                <p className="box-description">
                  Mix and match. Create your one-of-a-kind piece of furniture and take all rubbish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernFeatureSection;
