"use client";
import Link from "next/link";
import Image from "next/image";
import { useFilter } from "@context/CategoryContext";
import { brand, size } from "@utils/data";
import { useState } from "react";
import FeatureProductCard from "@component/category/FeatureProductCard";
const FilterBar = ({
  categoryOption,
  brandOption,
  sizeOption,
  page,
  menu,
  priceOption,
  featureProducts,
  sidebar,
}) => {
  const { handleNavigation, clearFilter } = useFilter();
  const [price, setPrice] = useState(0);
  return (
    <div
      className={`col-xl-3 col-lg-3 col-md-12 col-12 sidebar ${sidebar}-sidebar md-b-50`}
    >
      <div className="block block-product-cats">
        <div className="block-title row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <h2>Categories</h2>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <button
              className="button button-clear-filter"
              type="button"
              onClick={clearFilter}
            >
              Clear all filters
            </button>
          </div>
        </div>
        <div className="block-content">
          <div className="product-cats-list">
            <ul>
              {menu.map(({ category, count, key }, i) => (
                <li
                  key={i}
                  className={category === categoryOption ? "current" : ""}
                >
                  <span
                    onClick={(e) =>
                      handleNavigation({ key: "category", value: key })
                    }
                  >
                    {category}
                    <span className="count">{count}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Block Product Filter --> */}
      <div className="block block-product-filter">
        <div className="block-title">
          <h2>Price</h2>
        </div>
        <div className="block-content">
          <div id="slider-range" className="price-filter-wrap">
            <div className="filter-item price-filter">
              <div className="layout-slider">
                <span className="price-limit">0</span>
                <input
                  id="customeRange2"
                  name="price"
                  type="range"
                  className="form-range2"
                  min={0}
                  max={100}
                  step={10}
                  title="Price"
                  defaultValue={priceOption}
                  onChange={(e) => setPrice(e.target.value)}
                  onBlur={(e) =>
                    handleNavigation({ key: "price", value: price })
                  }
                />
                <span className="price-limit">100</span>
              </div>
              <div className="layout-slider-settings"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Block Product Filter --> */}
      <div className="block block-product-filter clearfix">
        <div className="block-title">
          <h2>Size</h2>
        </div>
        <div className="block-content">
          <ul className="filter-items text">
            {size.map((item) => (
              <li
                key={item}
                className={item === sizeOption ? "current" : ""}
                onClick={() => handleNavigation({ key: "size", value: item })}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <!-- Block Product Filter --> */}
      <div className="block block-product-filter clearfix">
        <div className="block-title">
          <h2>Brands</h2>
        </div>
        <div className="block-content">
          <ul className="filter-items image">
            {brand.map(({ src, title }, i) => (
              <li key={i} className={title === brandOption ? "current" : ""}>
                <span
                  onClick={(e) =>
                    handleNavigation({ key: "brand", value: title })
                  }
                >
                  <span>
                    <Image src={src} alt={title} width={75} height={85}></Image>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <!-- Block Products --> */}
      <div className="block block-products">
        <div className="block-title">
          <h2>Feature Product</h2>
        </div>
        <div className="block-content">
          <ul className="products-list">
            {featureProducts.map((item) => (
              <li className="product-item" key={item._id}>
                <FeatureProductCard product={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
