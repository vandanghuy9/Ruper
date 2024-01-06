import CartItem from "./CartItem";
import Link from "next/link";
const Cart = () => {
  const items = [
    {
      id: 0,
      quantity: 1,
      name: "Chair Oak Matt Lacquered",
      image: "/product/3.jpg",
      price: 100,
    },
    {
      id: 0,
      quantity: 1,
      name: "Zunkel Schwarz",
      image: "/product/1.jpg",
      price: 100,
    },
  ];
  return (
    <>
      <div className="remove-cart-shadow"></div>
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
                <span>$100.00</span>
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
  );
};
export default Cart;
