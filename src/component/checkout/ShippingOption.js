"use client";
import React from "react";
import { shippingOptions } from "@utils/data";
import { useCheckoutSubmit } from "@context/CheckoutContext";

const ShippingOption = ({ children }) => {
  const { shippingFee, setShippingFee, shippingOption, setShippingOption } = useCheckoutSubmit();

  return (
    <>
      <div className="shipping-totals">
        <div className="title">Shipping</div>
        <div>
          <ul className="shipping-methods custom-radio">
            {shippingOptions.map((item, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="shippingOption"
                  id={item.value}
                  className="shipping_method"
                  checked={item.fee === shippingFee}
                  value={item.value}
                  key={item.label}
                  onChange={(e) => {
                    setShippingFee(item.fee);
                    setShippingOption(item.value);
                  }}
                />
                <label htmlFor={item.value}>{item.label}</label>
              </li>
            ))}
          </ul>
          {children}
        </div>
      </div>
      <div className="order-total">
        <div className="title">Shipping fee</div>
        <div>
          <span>${shippingFee}.00</span>
        </div>
      </div>
    </>
  );
};

export default ShippingOption;
