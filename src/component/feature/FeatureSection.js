import FeatureCard from "./FeatureCard";
import { featureCardData } from "../../utils/data";
const FeatureSection = ({ isNoBorder }) => {
  return (
    <div
      className={`block block-feature ${
        isNoBorder === undefined ? "" : "no-border"
      }`}
    >
      <div className="block-widget-wrap">
        <div className="row lg-m-lr">
          {featureCardData.map((item, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 md-b-15 lg-p-lr"
              key={index}
            >
              <FeatureCard
                icon={item.icon}
                desc={item.desc}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
