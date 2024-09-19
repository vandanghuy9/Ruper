"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cart from "@component/cart/shopping-cart/Cart";
import { useCart } from "react-use-cart";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import EmptyCart from "@component/cart/EmptyCart";
import ShippingOption from "@component/checkout/ShippingOption";
const ShoppingCart = () => {
  const { cartTotal, isEmpty } = useCart();
  const {
    register,
    discountValue,
    couponCode,
    couponValue,
    discountType,
    shippingFee,
    setShippingFee,
  } = useCheckoutSubmit();
  console.log(discountValue);
  const [isCartReady, setIsCartReady] = useState(false);
  useEffect(() => {
    if (isEmpty !== undefined) {
      setIsCartReady(true);
    }
  }, [isEmpty]);
  return (
    <>
      {isCartReady && (
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
                  <ShippingOption>
                    <p className="shipping-desc">
                      Shipping options will be updated during checkout.
                    </p>
                  </ShippingOption>
                  {couponCode && (
                    <div className="order-total">
                      <div className="title">Coupon</div>
                      <div>
                        <span>{couponCode}</span>
                      </div>
                    </div>
                  )}
                  <div className="order-total">
                    <div className="title">Discount</div>
                    <div>
                      <span>
                        {discountType === "percentage"
                          ? `${couponValue}%`
                          : `$${couponValue}`}
                      </span>
                    </div>
                  </div>
                  <div className="order-total">
                    <div className="title">Total</div>
                    <div>
                      <span>
                        {discountValue === 0
                          ? `$${cartTotal + shippingFee}`
                          : `$${
                              discountType === "percentage"
                                ? cartTotal +
                                  shippingFee -
                                  cartTotal * discountValue
                                : cartTotal + shippingFee - discountValue
                            }`}
                      </span>
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
      )}
      {!isCartReady && <EmptyCart />}
    </>
  );
};

export default ShoppingCart;
