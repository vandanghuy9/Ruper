import { formatDate } from "@utils/menu";
import { paymentOption } from "@utils/data";
import Link from "next/link";
const OrderDetail = ({ order }) => {
  const {
    cart,
    userInfo: { billingAddress, shippingAddress },
    status,
    subTotal,
    shippingCost,
    discount,
    total,
    shippingOption,
    paymentMethod,
    createdAt,
  } = order;
  const chosenPaymentMethod = paymentOption.find(
    (item) => item.value === paymentMethod
  );
  return (
    <div className="invoice">
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
          Invoice
          <div>Status: {status}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-4 col-4">
          Date:
          <div> {formatDate(createdAt)} </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-4 col-4">
          Invoice to:
          <div> {billingAddress.name} </div>
          <div> {billingAddress.address} </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="cart-items table" cellSpacing={0}>
          <thead>
            <tr>
              <th className="product-thumbnail">Product</th>
              <th className="product-price">Price</th>
              <th className="product-quantity">Quantity</th>
              <th className="product-subtotal">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(
              ({
                id,
                productID,
                name,
                price,
                color,
                size,
                itemTotal,
                quantity,
              }) => (
                <tr key={id}>
                  <td className="product-thumbnail">
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
                    <div className="quantity">{quantity}</div>
                  </td>
                  <td className="product-subtotal">
                    <span>${itemTotal}</span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-6">
          <span className="h6">Payment method:</span>
          <div>{chosenPaymentMethod.label} </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-4">
          <span className="h6">Shipping Cost:</span>
          <div> ${shippingCost} </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-4">
          <span className="h6">Discount:</span> <div> ${discount} </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-4">
          <span className="h6">Total amount:</span>
          <div className="invoice-total"> ${total} </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
