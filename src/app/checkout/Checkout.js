"use client";
import Link from "next/link";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import InputText from "@component/form/InputText";
import Label from "@component/form/Label";
import Select from "@component/form/Select";
import Cart from "@component/cart/checkout/Cart";
import { useCart } from "react-use-cart";
import PaymentBox from "@component/form/PaymentBox";
import { useState } from "react";
import ErrorText from "@component/form/ErrorText";
import { countryOption, stateOption, shippingOption, paymentOption } from "@utils/data";
const Checkout = () => {
  const { register, handleSubmit, errors } = useCheckoutSubmit();
  const { cartTotal } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const onSubmit = (data) => {
    console.log(data);
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
                <span className="delimiter"></span>Shopping Cart
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="shop-checkout">
                  <form name="checkout" className="checkout" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                        <div className="customer-details">
                          <div className="billing-fields">
                            <h3>Billing details</h3>
                            <div className="billing-fields-wrapper">
                              <p className="form-row form-row-first validate-required">
                                <InputText
                                  id="billing_first_name"
                                  register={register}
                                  name="billing_first_name"
                                  placeholder=""
                                  label="First name"
                                  required={true}
                                  errors={errors}
                                />
                                <ErrorText error={errors.billing_first_name} />
                              </p>
                              <p className="form-row form-row-last validate-required">
                                <InputText
                                  id="billing_last_name"
                                  register={register}
                                  name="billing_last_name"
                                  placeholder=""
                                  label="Last name"
                                  required={true}
                                />
                                <ErrorText error={errors.billing_last_name} />
                              </p>
                              <p className="form-row form-row-wide">
                                <InputText
                                  id="billing_company"
                                  register={register}
                                  name="billing_company"
                                  placeholder=""
                                  label="Company name"
                                  required={false}
                                />
                              </p>
                              <p className="form-row form-row-wide validate-required">
                                <Label
                                  htmlFor="billing_country"
                                  content={"Country / Region"}
                                  required={true}
                                />
                                <span className="input-wrapper">
                                  <Select
                                    className={"country-select custom-select"}
                                    name={"billing_country"}
                                    register={register}
                                    options={countryOption}
                                  />
                                  <ErrorText error={errors.billing_country} />
                                </span>
                              </p>
                              <p className="form-row address-field validate-required form-row-wide">
                                <InputText
                                  id="billing_address_1"
                                  register={register}
                                  name="billing_address_1"
                                  placeholder="Street address"
                                  label="Street address "
                                  required={true}
                                />
                                <ErrorText error={errors.billing_address_1} />
                              </p>
                              <p className="form-row address-field form-row-wide">
                                <InputText
                                  id="billing_address_2"
                                  register={register}
                                  name="billing_address_2"
                                  placeholder="Apartment, suite, unit, etc"
                                  label="Apartment, suite, unit, etc.&nbsp; "
                                  required={false}
                                />
                              </p>
                              <p className="form-row address-field validate-required form-row-wide">
                                <InputText
                                  id="billing_city"
                                  register={register}
                                  name="billing_city"
                                  placeholder=""
                                  label="Town / City"
                                  required={false}
                                />
                              </p>
                              <p className="form-row address-field validate-required validate-state form-row-wide">
                                <Label
                                  htmlFor="billing_state"
                                  content={"State / County"}
                                  required={true}
                                />
                                <span className="input-wrapper">
                                  <Select
                                    options={stateOption}
                                    name={"billing_state"}
                                    register={register}
                                    className={"state-select custom-select"}
                                  />
                                  <ErrorText error={errors.billing_state} />
                                </span>
                              </p>
                              <p className="form-row address-field validate-required validate-postcode form-row-wide">
                                <InputText
                                  id={"billing_postcode"}
                                  register={register}
                                  name={"billing_postcode"}
                                  placeholder={""}
                                  label={"Postcode / ZIP"}
                                  required={true}
                                />
                                <ErrorText error={errors.billing_postcode} />
                              </p>
                              <p className="form-row form-row-wide validate-required validate-phone">
                                <InputText
                                  id={"billing_phone"}
                                  register={register}
                                  name={"billing_phone"}
                                  placeholder={""}
                                  label={"Phone"}
                                  required={true}
                                  type="tel"
                                />
                                <ErrorText error={errors.billing_phone} />
                              </p>
                              <p className="form-row form-row-wide validate-required validate-email">
                                <InputText
                                  id={"billing_email"}
                                  register={register}
                                  name={"billing_email"}
                                  placeholder={""}
                                  label={"Email address"}
                                  required={true}
                                  type="email"
                                />
                                <ErrorText error={errors.billing_email} />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="additional-fields">
                          <p className="form-row notes">
                            <Label
                              htmlFor="order_comments"
                              content={"Order notes"}
                              required={false}
                            />
                            <span className="input-wrapper">
                              <textarea
                                name="order_comments"
                                className="input-text"
                                id="order_comments"
                                placeholder="Notes about your order, e.g. special notes for delivery."
                                cols="5"
                                rows="2"
                                {...register("order_comments")}></textarea>
                            </span>
                          </p>
                        </div>
                      </div>
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
                              {paymentOption.map(({ label, value, description }, i) => (
                                <PaymentBox
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
