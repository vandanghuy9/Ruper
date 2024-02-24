import { useCart } from "react-use-cart";
import CartItem from "./CartItem";
const Cart = () => {
  const { items, cartTotal, totalUniqueItems } = useCart();
  return (
    <>
      <div className="review-order-title">Product</div>
      <div className="cart-items">
        {items.map((item, i) => (
          <CartItem key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
