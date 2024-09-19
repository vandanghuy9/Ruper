"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "react-use-cart";
import useHandleCart from "@hooks/useHandleCart";
import { useRouter } from "next/navigation";
import { useCheckoutSubmit } from "@context/CheckoutContext";
const Cart = () => {
  const router = useRouter();
  const { items } = useCart();
  const { handleUpdateQuantity, handleDeleteFromCart } = useHandleCart();
  const { couponRef, checkCouponInfo } = useCheckoutSubmit();
  const onUseCoupon = (e) => {
    e.preventDefault();
    checkCouponInfo();
  };
  return (
    <form onSubmit={onUseCoupon} className="cart-form">
      <div className="table-responsive">
        <table className="cart-items table" cellSpacing={0}>
          <thead>
            <tr>
              <th className="product-thumbnail">Product</th>
              <th className="product-price">Price</th>
              <th className="product-quantity">Quantity</th>
              <th className="product-subtotal">Subtotal</th>
              <th className="product-remove">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {items.map(
              ({
                id,
                productID,
                name,
                price,
                image,
                color,
                size,
                itemTotal,
                quantity,
              }) => (
                <tr key={id}>
                  <td className="product-thumbnail">
                    <Link href={`/product/${productID}`}>
                      <Image width={600} height={600} src={image} alt="image" />
                    </Link>
                    <div className="product-name">
                      <Link href={`/product/${productID}`}>{name}</Link>
                      <div className="attributes">
                        <div className="color">Color: {color} </div>
                        <div className="size">Size: {size} </div>
                      </div>
                    </div>
                  </td>
                  <td className="product-price">
                    <span className="price">${price}</span>
                  </td>
                  <td className="product-quantity">
                    <div className="quantity">
                      <button
                        type="button"
                        className="minus"
                        onClick={(e) => {
                          handleUpdateQuantity("DEC", id, quantity);
                        }}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="qty"
                        step="1"
                        min="0"
                        max=""
                        name="quantity"
                        value={quantity}
                        title="Qty"
                        size="4"
                        placeholder=""
                        inputmode="numeric"
                        autocomplete="off"
                        onChange={(e) => {}}
                      ></input>
                      <button
                        type="button"
                        className="plus"
                        onClick={(e) => {
                          handleUpdateQuantity("INC", id, quantity);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="product-subtotal">
                    <span>${itemTotal}</span>
                  </td>
                  <td className="product-remove">
                    <button
                      type="button"
                      title="Delete item"
                      onClick={(e) => handleDeleteFromCart({ id, name })}
                      className="remove"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              )
            )}
            <tr>
              <td colspan="6" className="actions">
                <div className="bottom-cart">
                  <div className="coupon">
                    <input
                      type="text"
                      name="coupon_code"
                      className="input-text"
                      id="coupon-code"
                      ref={couponRef}
                      placeholder="Coupon code"
                    ></input>
                    <button
                      type="submit"
                      name="apply_coupon"
                      className="button"
                      value="Apply coupon"
                    >
                      Apply coupon
                    </button>
                  </div>
                  <button
                    type="button"
                    name="update_cart"
                    className="button"
                    onClick={() => {
                      router.push("/shop");
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default Cart;
