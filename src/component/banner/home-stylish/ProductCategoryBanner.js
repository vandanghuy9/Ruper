import CategoryBannerItem from "../CategoryBannerItem";
import { stylishProductStyleBanner } from "@utils/data";
const ProductCategoryBanner = () => {
  return (
    <div className="block block-product-cats layout-3">
      <div className="block-widget-wrap">
        <div className="block-content">
          <div className="row">
            <div className="col-md-4 sm-m-b-50">
              <CategoryBannerItem item={stylishProductStyleBanner[0]} />
            </div>
            <div className="col-md-4 center sm-m-b-50">
              <CategoryBannerItem item={stylishProductStyleBanner[1]} />
              <CategoryBannerItem item={stylishProductStyleBanner[2]} />
            </div>
            <div className="col-md-4">
              <CategoryBannerItem item={stylishProductStyleBanner[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryBanner;
