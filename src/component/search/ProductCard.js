import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { _id, imageUrl, name, price, comment } = product;
  let rating = 0;
  let nonRating = 5;
  if (comment.length > 0) {
    for (let i = 0; i < comment.length; i++) {
      rating += comment[i].rating;
    }
    rating = Math.ceil(rating / comment?.length);
    nonRating = 5 - rating;
  }

  return (
    <li key={_id} className="row mt-1 mb-3">
      <Link
        href={`/product/${_id}`}
        className="product-image col-lg-3 col-md-3 col-sm-3 col-3"
      >
        <Image width={90} height={90} src={imageUrl[0]} alt="image" />
      </Link>
      <div className="col-lg-9 col-md-9 col-sm-9 col-9">
        <Link href={`/product/${_id}`} className="product-name">
          {name}
        </Link>
        <div className="price">${price}</div>
        <div className="price">
          {[...Array(rating)].map((item) => (
            <AiFillStar key={item} size={20} color="#fcad02" />
          ))}
          {[...Array(nonRating)].map((item) => (
            <AiFillStar key={item} size={20} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
