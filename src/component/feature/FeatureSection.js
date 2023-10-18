import FeatureCard from "./FeatureCard";
import { featureCardData } from "../../utils/data";
const FeatureSection = () => {
  return (
    <div className="block block-feature">
      <div className="block-widget-wrap">
        <div className="row lg-m-lr">
          {featureCardData.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              desc={item.desc}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
