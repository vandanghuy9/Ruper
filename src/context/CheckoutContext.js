"use client";
import { useForm } from "react-hook-form";
import { useState, createContext, useContext, useRef } from "react";
import { getCouponByCode } from "@services/couponService";
import { errorNoti, successNoti } from "@utils/notification/notification";
import { useCart } from "react-use-cart";
const Context = createContext(null);
export const CheckoutContext = ({ children }) => {
  const [isShippingSelected, setIsShippingSelected] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);
  const [discountType, setDiscountType] = useState(0);
  const [couponValue, setCouponValue] = useState(0);
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(null);
  const [shippingOption, setShippingOption] = useState(0);
  const couponRef = useRef("");
  const { cartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
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
    return getValues("paymentMethod");
  };
  const setPaymentMethod = (value) => {
    setValue("paymentMethod", value);
  };
  const handleUpdateTotalPrice = (type, value, minimumAmount) => {
    if (cartTotal < minimumAmount) {
      return {
        status: false,
        message: `The total order must be more than ${minimumAmount}$`,
      };
    }
    if (type === "percentage") {
      return { status: true, value: value * 0.01 };
    }
    return { status: true, value: value };
  };

  const checkCouponInfo = () => {
    getCouponByCode(couponRef.current?.value)
      .then((res) => {
        const { code, minimumAmount, expiryDate } = res;
        const expired = new Date(expiryDate);
        const currentDate = new Date();
        if (expired < currentDate) {
          return errorNoti("This coupon is expired");
        }
        const { type, value } = res?.discountType;
        const discountValue = handleUpdateTotalPrice(
          type,
          value,
          minimumAmount
        );
        if (!discountValue.status) {
          return errorNoti(discountValue.message);
        }
        setDiscountType(type);
        setCouponValue(value);
        setMinimumAmount(minimumAmount);
        setDiscountValue(discountValue.value);
        setCouponCode(code);
        successNoti(
          `Used ${code} for ${
            type === "percentage" ? `${value}%` : `${value}$`
          } discount`
        );
      })
      .catch((err) => {
        errorNoti(err.message);
      });
  };

  const handleSaveOrder = () => {
    setDiscountType("");
    setCouponCode("");
    setDiscountValue(0);
    setCouponValue(0);
    setMinimumAmount(0);
    setShippingFee(0);
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
        shippingFee,
        setShippingFee,
        shippingOption,
        setShippingOption,
        couponRef,
        checkCouponInfo,
        couponCode,
        couponValue,
        discountType,
        discountValue,
        minimumAmount,
        handleSaveOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCheckoutSubmit = () => useContext(Context);
