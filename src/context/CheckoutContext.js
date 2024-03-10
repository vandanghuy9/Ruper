"use client";
import { useForm } from "react-hook-form";
import { useState, createContext, useContext } from "react";
const Context = createContext(null);
export const CheckoutContext = ({ children }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      billing_first_name: "",
      billing_last_name: "",
      billing_company: "",
      billing_country: "",
      billing_address_1: "",
      billing_address_2: "",
      billing_city: "",
      billing_state: "",
      billing_postcode: "",
      billing_phone: "",
      billing_email: "",
      order_comments: "",
      shipping_method: "",
      payment_method: "",
    },
  });
  const handlePaymentMethod = () => {
    // const paymentMethod = getValues("payment_method");
    // setPayment(paymentMethod);
  };
  const getPaymentMethod = () => {
    // console.log(payment);
    return getValues("payment_method");
  };
  const setPaymentMethod = (value) => {
    setValue("payment_method", value);
  };
  return (
    <Context.Provider
      value={{
        register,
        handleSubmit,
        getValues,
        getPaymentMethod,
        handlePaymentMethod,
        errors,
        setPaymentMethod,
        control,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useCheckoutSubmit = () => useContext(Context);
