"use client";
import Link from "next/link";
import Image from "next/image";
import { useFilter } from "@context/CategoryContext";
import { brand, menu, size } from "@utils/data";
const FilterBar = ({ categoryOption, brandOption, sizeOption, page }) => {
  const { handleNavigation } = useFilter();
  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
      <div className="block block-product-cats">
        <div className="block-title">
          <h2>Categories</h2>
        </div>
        <div className="block-content">
          <div className="product-cats-list">
            <ul>
              {menu.map(({ category, count }, i) => (
                <li key={i} className={category === categoryOption ? "current" : ""}>
                  <span onClick={(e) => handleNavigation({ key: "category", value: category })}>
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
                onClick={() => handleNavigation({ key: "size", value: item })}>
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
                <span onClick={(e) => handleNavigation({ key: "brand", value: title })}>
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
            <li className="product-item">
              <Link href={"/"} className="product-image">
                <Image src={"/product/6.jpg"} alt="product-image" width={80} height={80} />
              </Link>
              <div className="product-content">
                <h2 className="product-title">
                  <Link href={"/"}>Dining Table</Link>
                </h2>
                <div className="rating small">
                  <div className="star star-5"></div>
                </div>
                <span className="price">
                  <del aria-hidden="true">
                    <span>$150.00</span>
                  </del>
                  <ins>
                    <span>$100.00</span>
                  </ins>
                </span>
              </div>
            </li>
            <li className="product-item">
              <Link href={"/"} className="product-image">
                <Image src={"/product/8.jpg"} alt="product-image" width={80} height={80} />
              </Link>

              <div className="product-content">
                <h2 className="product-title">
                  <Link href={"/"}>Spinning Pendant Lamp</Link>
                </h2>
                <div className="rating small">
                  <div className="star star-0"></div>
                </div>
                <span className="price">$120.00</span>
              </div>
            </li>
            <li className="product-item">
              <Link href={"/"} className="product-image">
                <Image src={"/product/9.jpg"} alt="product-image" width={80} height={80} />
              </Link>
              <div className="product-content">
                <h2 className="product-title">
                  <Link href={"/"}>Bora Armchair</Link>
                </h2>
                <div className="rating small">
                  <div className="star star-5"></div>
                </div>
                <span className="price">
                  <del aria-hidden="true">
                    <span>$200.00</span>
                  </del>
                  <ins>
                    <span>$180.00</span>
                  </ins>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
