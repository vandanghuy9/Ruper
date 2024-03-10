import Link from "next/link";
import Image from "next/image";
import useHandleCart from "@hooks/useHandleCart";
const CartItem = ({ item }) => {
  const { quantity, name, image, price, color, size, productID } = item;
  const { handleDeleteFromCart } = useHandleCart();
  return (
    <>
      <Link
        href={"/"}
        className="remove"
        title="Remove this item"
        onClick={() => handleDeleteFromCart(item)}>
        <i className="icon_close">X</i>
      </Link>
      <Link href={`/product/${productID}`} className="product-image">
        <Image width={600} height={600} src={image} alt="image" />
      </Link>
      <Link href={`/product/${productID}`} className="product-name">
        {name}
      </Link>
      <div className="attributes">
        <div className=" quantity">Qty: {quantity}</div>
        <div className=" color">Color: {color} </div>
        <div className=" size">Size: {size} </div>
      </div>
      <div className="price">${price}</div>
    </>
  );
};

export default CartItem;
