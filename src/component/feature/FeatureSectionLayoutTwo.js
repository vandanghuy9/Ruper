import FeatureCard from "./FeatureCard";
import { featureCardData } from "@utils/data";
const FeatureSection = ({ isNoBorder = true }) => {
  return (
    <div className={`block block-feature layout-2 ${isNoBorder ? "" : "no-border"}`}>
      <div className="block-widget-wrap">
        <div className="row lg-m-lr">
          {featureCardData.slice(0, 3).map((item, index) => (
            <div className="col-md-4 sm-m-b-50" key={index}>
              <FeatureCard icon={item.icon} desc={item.desc} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
