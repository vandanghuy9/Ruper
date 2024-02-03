import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const useHandleCart = () => {
  const { addItem, items, updateItem, totalUniqueItems, removeItem } = useCart();
  const handleAddToCart = (product, quantity, attributes) => {
    const { _id, name, imageUrl, discount, price, stocks } = product;
    const { color, size } = attributes;
    const productInStock = stocks.find((i) => i.color === color && i.size === size);
    if (!productInStock) {
      toast.error("This variety is out of stock");
      return false;
    }
    const result = items.find((i) => i.id === productInStock._id);
    console.log(result);
    if (result) {
      console.log("old product");
      updateItem(result.id, {
        quantity: result?.quantity + quantity,
      });
    } else {
      addItem({ id: productInStock._id, name, image: imageUrl[0], price, color, size }, quantity);
    }
    toast.success(`${product.name} added to cart successfully`);
    return true;
  };
  const handleDeleteFromCart = (product) => {
    removeItem(product.id);
    toast.success(`${product.name} is removed from cart`);
  };
  return {
    handleAddToCart,
    handleDeleteFromCart,
  };
};

export default useHandleCart;
