import Image from "next/image";
const CartItem = ({ item }) => {
  const { image, name, quantity, price } = item;
  return (
    <div className="cart-item">
      <div className="info-product">
        <div className="product-thumbnail">
          <Image src={image} width={600} height={600} alt="product" />
        </div>
        <div className="product-name">
          {name}
          <strong className="product-quantity">QTY : {quantity}</strong>
        </div>
      </div>
      <div className="product-total">
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
