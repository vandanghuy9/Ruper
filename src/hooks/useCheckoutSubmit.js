import { useForm } from "react-hook-form";
import { useState } from "react";
const useCheckoutSubmit = () => {
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
  return {
    register,
    handleSubmit,
    getValues,
    getPaymentMethod,
    handlePaymentMethod,
    errors,
    setPaymentMethod,
    control,
  };
};

export default useCheckoutSubmit;
