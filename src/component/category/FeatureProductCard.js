"use client";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { calcuteRating } from "@utils/menu";
const FeatureProductCard = ({ product }) => {
  const { _id, imageUrl, name, price, discount, comment } = product;
  const { rating, nonRating } = calcuteRating(comment);
  if (!product) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Link href={`/product/${_id}`} className="product-image">
        <Image src={imageUrl[0]} alt="product-image" width={80} height={80} />
      </Link>
      <div className="product-content">
        <h2 className="product-title">
          <Link href={`/product/${_id}`}>{name}</Link>
        </h2>
        <div className="rating small">
          {rating > 0 &&
            [...Array(rating).keys()].map((item) => (
              <AiFillStar key={item} size={15} color="#fcad02" />
            ))}
          {nonRating > 0 &&
            [...Array(nonRating).keys()].map((item) => (
              <AiFillStar key={item + rating} size={15} />
            ))}
        </div>
        <span className="price">
          {discount ? (
            <>
              <del aria-hidden="true">
                <span>${price}</span>
              </del>
              <ins>
                <span>${Math.ceil((price * discount) / 100)}</span>
              </ins>
            </>
          ) : (
            `$${price}`
          )}
        </span>
      </div>
    </>
  );
};

export default FeatureProductCard;
