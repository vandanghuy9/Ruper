import Image from "next/image";
const CartItem = ({ item }) => {
  const { image, name, quantity, price, color, size } = item;
  return (
    <div className="cart-item">
      <div className="info-product">
        <div className="product-thumbnail">
          <Image src={image} width={600} height={600} alt="product" />
        </div>
        <div className="product-name">
          {name}
          <div className="d-flex">
            <strong className="product-quantity ">QTY : {quantity}</strong>{" "}
            <strong className="product-quantity px-4">COLOR : {color}</strong>
            <strong className="product-quantity">SIZE : {size}</strong>
          </div>
        </div>
      </div>
      <div className="product-total">
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
