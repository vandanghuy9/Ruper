import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const FeatureProductCard = ({ product }) => {
  const { _id, imageUrl, name, price, discount } = product;
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
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
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
