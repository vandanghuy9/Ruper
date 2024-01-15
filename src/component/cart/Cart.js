import CartItem from "./CartItem";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useCart } from "react-use-cart";
const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { items, cartTotal, totalUniqueItems } = useCart();
  return (
    <>
      <div
        className={showCart ? "dropdown mini-cart top-cart show" : "dropdown mini-cart top-cart"}>
        <button
          className="dropdown-toggle cart-icon"
          type="button"
          onClick={(e) => {
            setShowCart(true);
          }}>
          <AiOutlineShopping size={30} color="black" />
          <span className="cart-count">{totalUniqueItems}</span>
        </button>
        {showCart && (
          <>
            <div className="remove-cart-shadow" onClick={(e) => setShowCart(false)}></div>
            <div className="dropdown-menu cart-popup show">
              {items.length === 0 && (
                <div className="cart-empty-wrap">
                  <ul className="cart-list">
                    <li className="empty">
                      <span>No products in the cart.</span>
                      <a className="go-shop" href="/">
                        GO TO SHOP
                      </a>
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
                      Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong>
                    </div>
                    <div className="total-percent">
                      <div className="percent" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div className="buttons">
                    <Link href="/" className="button btn view-cart btn-primary">
                      View cart
                    </Link>
                    <Link href="/" className="button btn checkout btn-default">
                      Check out
                    </Link>
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
