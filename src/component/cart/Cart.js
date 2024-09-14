"use client";
import CartItem from "./CartItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useAuth } from "@context/UserContext";
const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { items, cartTotal, totalUniqueItems } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const { handleFormActive, isUserLogin } = useAuth();
  const handleViewCart = (e) => {
    router.push("/cart");
    setShowCart((prevShowCart) => !prevShowCart);
  };
  const handleCheckout = (e) => {
    const isLogin = isUserLogin();
    if (isLogin) {
      router.push("/checkout");
      return setShowCart((prevShowCart) => !prevShowCart);
    }
    const param = new URLSearchParams({ redirect: `/checkout` });
    router.push(`${pathname}?${param.toString()}`);
    handleFormActive();
    return setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <>
      <div
        className={
          showCart
            ? "dropdown mini-cart top-cart show"
            : "dropdown mini-cart top-cart"
        }
      >
        <button
          className="dropdown-toggle cart-icon bg-transparent"
          type="button"
          onClick={(e) => {
            setShowCart(true);
          }}
        >
          <div className="icons-cart">
            <span className="icon">
              <AiOutlineShopping size={30} color="black" />
            </span>
            <span className="cart-count">{totalUniqueItems}</span>
          </div>
        </button>
        {showCart && (
          <>
            <div
              className="remove-cart-shadow"
              onClick={(e) => setShowCart(false)}
            ></div>
            <div className="dropdown-menu cart-popup show">
              {items.length === 0 && (
                <div className="cart-empty-wrap">
                  <ul className="cart-list">
                    <li className="empty">
                      <span>No products in the cart.</span>
                      <Link className="go-shop" href="/shop">
                        GO TO SHOP
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {items.length > 0 && (
                <div className="cart-list-wrap">
                  <ul className="cart-list ">
                    {items.map((item) => (
                      <li key={item.id} className="mini-cart-item">
                        <CartItem item={item} />
                      </li>
                    ))}
                  </ul>
                  <div className="total-cart">
                    <div className="title-total">Total: </div>
                    <div className="total-price">
                      <span>${cartTotal}</span>
                    </div>
                  </div>
                  <div className="free-ship">
                    <div className="title-ship">
                      Buy <strong>$400</strong> more to enjoy{" "}
                      <strong>FREE Shipping</strong>
                    </div>
                    <div className="total-percent">
                      <div className="percent" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button
                      type="button"
                      onClick={handleViewCart}
                      className="button btn view-cart btn-primary"
                    >
                      View cart
                    </button>
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="button btn checkout btn-default"
                    >
                      Check out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
