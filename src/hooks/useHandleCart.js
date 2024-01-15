import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

const useHandleCart = () => {
  const { addItem, items, updateItem } = useCart();
  const handleAddToCart = (product, quantity) => {
    const { _id, name, imageUrl, discount, price } = product;
    const result = items.find((i) => i.id === _id);
    if (result) {
      updateItem(_id, {
        quantity: result?.quantity + quantity,
      });
    } else {
      addItem({ id: _id, name, image: imageUrl[0], price }, quantity);
    }
    toast.success(`${product.name} added to cart successfully`);
  };

  return {
    handleAddToCart,
  };
};

export default useHandleCart;
