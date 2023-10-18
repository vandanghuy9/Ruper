import { IoReturnUpBackSharp } from "react-icons/io5";
const FeatureCard = ({icon, title, desc}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 md-b-15 lg-p-lr">
      <div className="box">
        <div className="box-icon">
          <span>
            {icon}
          </span>
        </div>
        <div className="box-title-wrap">
          <h3 className="box-title">{title}</h3>
          <p className="box-description">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
