import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const ProductItemLookbook = ({ product, containerStyle, contentStyle }) => {
  return (
    <div className="item-lookbook" style={{ ...containerStyle, width: 30, height: 30 }}>
      <span className="number-lookbook">
        <FaPlus size={20} />1
      </span>
      <div className="content-lookbook" style={{ ...contentStyle }}>
        <div className="item-thumb">
          <Link href={`/product/${product?._id}`}>
            <Image width={1000} height={1000} src={product.imageUrl[0]} alt={product.name} />
          </Link>
        </div>
        <div className="content-lookbook-bottom">
          <div className="item-title">
            <Link href={`/product/${product._id}`}>{product?.name}</Link>
          </div>
          <span className="price">
            {product.discount ? (
              <>
                <del>
                  <span>${product.price}</span>
                </del>
                <ins>
                  <span>${Math.ceil((product.price * (100 - product.discount)) / 100)}</span>
                </ins>
              </>
            ) : (
              <>${product.price}</>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemLookbook;
