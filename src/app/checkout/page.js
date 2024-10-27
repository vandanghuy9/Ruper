import Checkout from "./Checkout";
import CardPaymentSuccess from "@component/checkout/CardPaymentSuccess";
import { saveCardPaymentOrder } from "@services/orderService";
const CheckoutPage = async ({ searchParams }) => {
  const sessionId = searchParams?.session_id;
  if (sessionId) {
    const res = await saveCardPaymentOrder({ sessionId });
    const isSaveOrderSuccess = res?.success;
    const message = res?.message;
    return <CardPaymentSuccess isSuccess={isSaveOrderSuccess} message={message} />;
  }
  return <Checkout />;
};
export default CheckoutPage;
