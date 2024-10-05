import CategoryBannerItem from "../CategoryBannerItem";
import { gothicProductCategoryBanner } from "@utils/data";
const GothicCategoryBanner = () => {
  return (
    <div className="block-content">
      <div className="row">
        {gothicProductCategoryBanner.map((item, index) => (
          <div className="col-md-3 sm-m-b-50" key={index}>
            <CategoryBannerItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GothicCategoryBanner;
