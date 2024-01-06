import Link from "next/link";
import Image from "next/image";
const CartItem = ({ item }) => {
  const { quantity, name, image, price } = item;
  return (
    <>
      <Link href={"/"} className="remove" title="Remove this item">
        <i className="icon_close"></i>
      </Link>
      <Link href={"/shop-details"} className="product-image">
        <Image width={600} height={600} src={image} alt="image" />
      </Link>
      <Link href={"/shop-details"} className="product-name">
        {name}
      </Link>
      <div className="quantity">Qty: {quantity}</div>
      <div className="price">${price}</div>
    </>
  );
};

export default CartItem;
