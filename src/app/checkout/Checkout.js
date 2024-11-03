"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import { useAuth } from "@context/UserContext";
import { useCart } from "react-use-cart";
import PaymentBox from "@component/form/PaymentBox";
import { useRouter } from "next/navigation";
import { paymentOption } from "@utils/data";
import Billing from "@component/checkout/Billing";
import { saveOrder, handleCardPayment } from "@services/orderService";
import { successNoti, errorNoti } from "@utils/notification/notification";
import ShippingOption from "@component/checkout/ShippingOption";
import getStripe from "../../lib/getStripe";
const Cart = dynamic(() => import("@component/cart/checkout/Cart"), {
  ssr: false,
  loading: () => (
    <>
      <div className="review-order-title">Product</div>
      <div className="cart-items">Loading ...</div>
    </>
  ),
});

const Checkout = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    isShippingSelected,
    discountValue,
    couponCode,
    couponValue,
    discountType,
    shippingFee,
    shippingOption,
    couponRef,
    checkCouponInfo,
    handleSaveOrder,
  } = useCheckoutSubmit();
  const { cartTotal, items, emptyCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const { isUserLogin } = useAuth();
  useEffect(() => {
    const isLogin = isUserLogin();
    if (!isLogin) {
      router.push("/login?redirect=/checkout");
    }
  }, [router, isUserLogin]);

  const onSubmit = async (data) => {
    const stripe = await getStripe();
    const orderInfo = {
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
      discountType,
      discountValue,
      orderNote: data.orderNote,
      shippingOption,
      paymentMethod: data.paymentMethod,
    };
    try {
      if (data.paymentMethod === "card") {
        return handleCardPayment(orderInfo).then((res) => {
          stripe.redirectToCheckout({ sessionId: res.id });
        });
      }
      return saveOrder(orderInfo)
        .then((res) => {
          successNoti(res?.message);
          emptyCart();
          handleSaveOrder();
        })
        .catch((e) => {
          errorNoti(e.message);
        });
    } catch (error) {
      errorNoti(error.message);
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
                  <form name="checkout" className="checkout" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <Billing />
                      <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                        <div className="checkout-review-order">
                          <Cart>
                            <ShippingOption />
                            <div className="shipping-totals shipping">
                              <div className="coupon">
                                <input
                                  type="text"
                                  name="coupon_code"
                                  className="input-text"
                                  id="coupon-code"
                                  ref={couponRef}
                                  placeholder="Coupon code"></input>
                                <button
                                  type="button"
                                  name="apply_coupon"
                                  className="coupon-button"
                                  value="Apply coupon"
                                  onClick={() => {
                                    checkCouponInfo();
                                  }}>
                                  Apply coupon
                                </button>
                              </div>
                            </div>

                            {couponCode && (
                              <div className="order-total">
                                <h2>Coupon</h2>
                                <div className="total-price">
                                  <strong>
                                    <span>{couponCode}</span>
                                  </strong>
                                </div>
                              </div>
                            )}
                            <div className="order-total">
                              <h2>Discount</h2>
                              <div className="total-price">
                                <strong>
                                  {discountType === "percentage"
                                    ? `${couponValue}%`
                                    : `$${couponValue}`}
                                </strong>
                              </div>
                            </div>
                          </Cart>
                          <div id="payment" className="checkout-payment">
                            <ul className="payment-methods methods custom-radio">
                              {paymentOption.map(({ label, value, description }, i) => (
                                <PaymentBox
                                  key={i}
                                  label={label}
                                  value={value}
                                  description={description}
                                  selectedPayment={selectedPayment}
                                  setSelectedPayment={setSelectedPayment}
                                  register={register}
                                />
                              ))}
                            </ul>
                            <div className="form-row place-order">
                              <div className="terms-and-conditions-wrapper">
                                <div className="privacy-policy-text"></div>
                              </div>
                              <button
                                type="submit"
                                className="button alt"
                                name="checkout_place_order">
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
