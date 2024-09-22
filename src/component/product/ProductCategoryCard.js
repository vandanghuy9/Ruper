import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCategoryCard = ({ item }) => {
  const { key, image, category } = item;
  return (
    <div className="item item-product-cat slick-slide">
      <div className="item-product-cat-content">
        <Link href={`/shop?category=${key}`}>
          <div className="item-image">
            <Image width={258} height={258} src={image} alt={category} />
          </div>
        </Link>
        <div className="product-cat-content-info">
          <h2 className="item-title">
            <Link href={`/shop?category=${key}`}>{category}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
