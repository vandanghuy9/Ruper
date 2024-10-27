"use client";
import { useCart } from "react-use-cart";
import CartItem from "./CartItem";
import { useCheckoutSubmit } from "@context/CheckoutContext";
const Cart = ({ children }) => {
  const { discountValue, discountType, shippingFee } = useCheckoutSubmit();

  const { items, cartTotal } = useCart();
  return (
    <div className="checkout-review-order-table">
      <div>
        <div className="review-order-title">Product</div>
        <div className="cart-items">
          {items.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="cart-subtotal">
        <h2>Subtotal</h2>
        <div className="subtotal-price">
          <span>${cartTotal}.00</span>
        </div>
      </div>
      {children}
      <div className="order-total">
        <h2>Total</h2>
        <div className="total-price">
          <strong>
            <span>
              ${" "}
              {discountValue === 0
                ? `${cartTotal + shippingFee}`
                : `${
                    discountType === "percentage"
                      ? cartTotal + shippingFee - cartTotal * discountValue
                      : cartTotal + shippingFee - discountValue
                  }`}
              .00
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
