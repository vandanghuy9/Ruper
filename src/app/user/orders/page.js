import OrderHistory from "./OrderHistory";
import { getUserOrder } from "@services/orderService";
const OrderHistoryPage = async () => {
  const orders = await getUserOrder();
  return <OrderHistory orders={orders} />;
};

export default OrderHistoryPage;
