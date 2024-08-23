"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import { useAuth } from "@context/UserContext";
import Cart from "@component/cart/checkout/Cart";
import { useCart } from "react-use-cart";
import PaymentBox from "@component/form/PaymentBox";
import { useRouter } from "next/navigation";
import { shippingOption, paymentOption } from "@utils/data";
import Billing from "@component/checkout/Billing";
import { saveOrder } from "@services/orderService";
import { successNoti, errorNoti } from "@utils/notification/notification";
import { revalidatePath } from "next/cache";
const Checkout = () => {
  const router = useRouter();
  const { register, handleSubmit, isShippingSelected } = useCheckoutSubmit();
  const { cartTotal, items, emptyCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const { isUserLogin } = useAuth();
  useEffect(() => {
    const isLogin = isUserLogin();
    if (!isLogin) {
      router.push("/login");
    }
  }, []);
  const onSubmit = async (data) => {
    try {
      saveOrder({
        cart: items,
        isShippingSelected,
        userInfo: {
          billingAddress: {
            firstName: data.billing_first_name,
            lastName: data.billing_last_name,
            companyName: data.billing_companyName,
            country: data.billing_country,
            address: data.billing_address,
            apartment: data.billing_apartment,
            city: data.billing_city,
            state: data.billing_state,
            zipCode: data.billing_zipCode,
            contact: data.billing_zipCode,
            email: data.billing_email,
          },
          shippingAddress: {
            firstName: data.shipping_first_name,
            lastName: data.shipping_last_name,
            companyName: data.shipping_companyName,
            country: data.shipping_country,
            address: data.shipping_address,
            apartment: data.shipping_apartment,
            city: data.shipping_city,
            state: data.shipping_state,
            zipCode: data.shipping_zipCode,
            contact: data.shipping_contact,
            email: data.shipping_email,
          },
        },
        subTotal: cartTotal,
        orderNote: data.orderNote,
        shippingOption: data.shippingOption,
        paymentMethod: data.paymentMethod,
      }).then((res) => {
        emptyCart();
        successNoti(res?.message);
      });
    } catch (error) {
      errorNoti("Error saving order");
    }
  };
  return (
    <>
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading">Checkout</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="delimiter"></span>
                <Link href="/">Shop</Link>
                <span className="delimiter"></span>Checkout
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="shop-checkout">
                  <form
                    name="checkout"
                    className="checkout"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row">
                      <Billing />
                      <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                        <div className="checkout-review-order">
                          <div className="checkout-review-order-table">
                            <div>
                              <Cart />
                            </div>
                            <div className="cart-subtotal">
                              <h2>Subtotal</h2>
                              <div className="subtotal-price">
                                <span>${cartTotal}.00</span>
                              </div>
                            </div>
                            <div className="shipping-totals shipping">
                              <h2>Shipping</h2>
                              <div>
                                <ul className="shipping-methods custom-radio">
                                  {shippingOption.map((item, i) => (
                                    <li key={i}>
                                      <input
                                        type="radio"
                                        name="shippingOption"
                                        id={item.value}
                                        className="shipping_method"
                                        {...register("shippingOption")}
                                        value={item.value}
                                      />
                                      <label htmlFor={item.value}>
                                        {item.label}
                                      </label>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="order-total">
                              <h2>Total</h2>
                              <div className="total-price">
                                <strong>
                                  <span>$480.00</span>
                                </strong>
                              </div>
                            </div>
                          </div>
                          <div id="payment" className="checkout-payment">
                            <ul className="payment-methods methods custom-radio">
                              {paymentOption.map(
                                ({ label, value, description }, i) => (
                                  <PaymentBox
                                    label={label}
                                    value={value}
                                    description={description}
                                    selectedPayment={selectedPayment}
                                    setSelectedPayment={setSelectedPayment}
                                    register={register}
                                  />
                                )
                              )}
                            </ul>
                            <div className="form-row place-order">
                              <div className="terms-and-conditions-wrapper">
                                <div className="privacy-policy-text"></div>
                              </div>
                              <button
                                type="submit"
                                className="button alt"
                                name="checkout_place_order"
                              >
                                Place order
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
