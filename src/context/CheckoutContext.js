"use client";
import { useForm } from "react-hook-form";
import { useState, createContext, useContext } from "react";
const Context = createContext(null);
export const CheckoutContext = ({ children }) => {
  const [isShippingSelected, setIsShippingSelected] = useState(false);
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
      billing_companyName: "",
      billing_country: "",
      billing_address: "",
      billing_apartment: "",
      billing_city: "",
      billing_state: "",
      billing_zipCode: "",
      billing_contact: "",
      billing_email: "",
      shipping_first_name: "",
      shipping_last_name: "",
      shipping_companyName: "",
      shipping_country: "",
      shipping_address: "",
      shipping_apartment: "",
      shipping_city: "",
      shipping_state: "",
      shipping_zipCode: "",
      shipping_contact: "",
      shipping_email: "",
      orderNote: "",
      shippingOption: "",
      paymentMethod: "",
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
        isShippingSelected,
        setIsShippingSelected,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCheckoutSubmit = () => useContext(Context);
