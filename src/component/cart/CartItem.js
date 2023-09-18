const CartItem = (item) => {
  return (
    <>
      <Link href={"/"} className="remove" title="Remove this item">
        <i className="icon_close"></i>
      </Link>
      <Link href={"./shop-details"} className="product-image">
        <Image width={600} height={600} src={"/public/product/3.jpg"} />
      </Link>
      <Link href={"./shop-details"} className="product-name">
        Chair Oak Matt Lacquered
      </Link>
      <div className="quantity">Qty: 1</div>
      <div className="price">$150.00</div>
    </>
  );
};
