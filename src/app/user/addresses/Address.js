import Link from "next/link";

const Address = ({ address }) => {
  const { billingAddress, shippingAddress } = address;
  return (
    <div className="tab-pane fade show active" id="addresses" role="tabpanel">
      <div className="my-account-addresses">
        <p>
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="addresses">
          <div className="addresses-col">
            <header className="col-title">
              <h3>Billing address</h3>
              <Link href="#" className="edit">
                Edit
              </Link>
            </header>
            <address>
              {billingAddress.country}
              <br />
              {billingAddress.address}
              <br />
              {billingAddress.city}
              <br />
              {billingAddress.apartment && billingAddress.apartment}
            </address>
          </div>
          <div className="addresses-col">
            <header className="col-title">
              <h3>Shipping address</h3>
              <Link href="#" className="edit">
                Edit
              </Link>
            </header>
            <address>
              {shippingAddress.country}
              <br />
              {shippingAddress.address}
              <br />
              {shippingAddress.city}
              <br />
              {shippingAddress.apartment && shippingAddress.apartment}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
