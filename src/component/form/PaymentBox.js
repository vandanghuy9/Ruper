import useCheckoutSubmit from "@hooks/useCheckoutSubmit";
const PaymentBox = ({
  label,
  value,
  description,
  selectedPayment,
  setSelectedPayment,
  register,
}) => {
  return (
    <>
      <li className="payment-method">
        <input
          type="radio"
          className="input-radio"
          name="payment_method"
          value={value}
          id={value}
          {...register("payment_method")}
          onClick={() => setSelectedPayment(value)}
        />
        <label htmlFor={value}>{label}</label>
        {selectedPayment === value ? (
          <div className="payment-box">
            <p>{description}</p>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default PaymentBox;
