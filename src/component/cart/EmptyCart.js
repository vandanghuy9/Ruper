import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function EmptyCart() {
  return (
    <div className="shop-cart-empty">
      <div className="notices-wrapper">
        <p className="cart-empty">Your cart is currently empty.</p>
      </div>
      <div className="return-to-shop">
        <Link className="button" href="/shop">
          <IoArrowBack size={20} />
          Return to shop
        </Link>
      </div>
    </div>
  );
}
