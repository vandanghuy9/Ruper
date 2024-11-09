"use client";
import Link from "next/link";
import { useShopProduct } from "@context/ShopProductContext";
const AddToCartButton = ({ _id }) => {
  const { handleOpenQuickViewPopUp } = useShopProduct();

  return (
    <div data-title="Add to cart">
      <Link
        href="#"
        className="button"
        onClick={(e) => {
          handleOpenQuickViewPopUp(_id);
        }}>
        Add to cart
      </Link>
    </div>
  );
};

export default AddToCartButton;
