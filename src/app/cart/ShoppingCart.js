"use client";
import Link from "next/link";
import Cart from "@component/cart/shopping-cart/Cart";
import { useCart } from "react-use-cart";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import { shippingOption } from "@utils/data";
import EmptyCart from "@component/cart/EmptyCart";
const ShoppingCart = () => {
  const { cartTotal, isEmpty } = useCart();
  const { register } = useCheckoutSubmit();
  return (
    <>
      {!isEmpty ? (
        <div className="shop-cart">
          <div className="row">
            <div className="col-xl-8 col-lg-12 col-md-12 col-12">
              <Cart />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12">
              <div className="cart-totals">
                <h2>Cart totals</h2>
                <div>
                  <div className="cart-subtotal">
                    <div className="title">Subtotal</div>
                    <div>
                      <span>${cartTotal}.00</span>
                    </div>
                  </div>
                  <div className="shipping-totals">
                    <div className="title">Shipping</div>
                    <div>
                      <ul className="shipping-methods custom-radio">
                        {shippingOption.map((item) => (
                          <li>
                            <input
                              type="radio"
                              name="shipping_method"
                              id={item.value}
                              className="shipping_method"
                              {...register("shipping_method")}
                              value={item.value}
                            />
                            <label htmlFor={item.value}>{item.label}</label>
                          </li>
                        ))}
                      </ul>
                      <p className="shipping-desc">
                        Shipping options will be updated during checkout.
                      </p>
                    </div>
                  </div>
                  <div className="order-total">
                    <div className="title">Total</div>
                    <div>
                      <span>${cartTotal}.00</span>
                    </div>
                  </div>
                </div>
                <div className="proceed-to-checkout">
                  <Link href="/checkout" className="checkout-button button">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default ShoppingCart;
