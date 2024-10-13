import CategoryBannerItem from "../CategoryBannerItem";
import { retroProductStyleBanner as data } from "@utils/data";

const RetroProductCategoryBanner = () => {
  return (
    <div className="block block-product-cats layout-7">
      <div className="block-widget-wrap">
        <div className="block-content">
          <div className="row">
            <div className="col-md-4 sm-m-b-15">
              <CategoryBannerItem item={data[0]} />
            </div>
            <div className="col-md-4 center sm-m-b-15">
              <CategoryBannerItem item={data[1]} />
              <CategoryBannerItem item={data[2]} />
            </div>
            <div className="col-md-4">
              <CategoryBannerItem item={data[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroProductCategoryBanner;
