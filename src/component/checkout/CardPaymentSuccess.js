"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import { useCart } from "react-use-cart";

const CardPaymentSuccess = ({ isSuccess = false, message }) => {
  const { handleSaveOrder } = useCheckoutSubmit();
  const { emptyCart } = useCart();
  useEffect(() => {
    if (isSuccess) {
      emptyCart();
      handleSaveOrder();
    }
  }, [isSuccess, emptyCart, handleSaveOrder]);
  return (
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
              <Link href="/shop">Shop</Link>
              <span className="delimiter"></span>Checkout
            </div>
          </div>
        </div>
        <div id="content" className="site-content" role="main">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="shop-cart-empty">
                <div className="notices-wrapper">
                  <p className="cart-empty">{message}</p>
                </div>
                <div className="return-to-shop">
                  <Link className="button" href="/shop">
                    <IoArrowBack size={20} />
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentSuccess;
