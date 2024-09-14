import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { successNoti, errorNoti } from "@utils/notification/notification";
const useHandleCart = () => {
  const { addItem, items, updateItem, totalUniqueItems, removeItem } =
    useCart();
  const handleAddToCart = (product, quantity, attributes) => {
    const { _id, name, imageUrl, discount, price, stocks } = product;
    console.log(_id);
    const { color, size } = attributes;
    const productInStock = stocks.find(
      (i) => i.color === color && i.size === size
    );
    if (!productInStock) {
      errorNoti("This variety is out of stock");
      return false;
    }
    const result = items.find((i) => i.id === productInStock._id);
    if (result) {
      console.log("old product");
      updateItem(result.id, {
        quantity: result?.quantity + quantity,
      });
    } else {
      addItem(
        {
          id: productInStock._id,
          productID: _id,
          name,
          image: imageUrl[0],
          price: Math.ceil((price * (100 - discount)) / 100),
          color,
          size,
        },
        quantity
      );
    }
    successNoti(`${product.name} added to cart successfully`);
    return true;
  };
  const handleDeleteFromCart = (product) => {
    removeItem(product.id);
    successNoti(`${product.name} is removed from cart`);
  };

  const handleUpdateQuantity = (action, id, productQuantity, quantity) => {
    if (action) {
      if (action === "INC") {
        updateItem(id, {
          quantity: productQuantity + 1,
        });
      } else if (action === "DEC") {
        if (productQuantity > 1) {
          updateItem(id, {
            quantity: productQuantity - 1,
          });
        }
      }
    }
  };
  return {
    handleAddToCart,
    handleDeleteFromCart,
    handleUpdateQuantity,
  };
};

export default useHandleCart;
