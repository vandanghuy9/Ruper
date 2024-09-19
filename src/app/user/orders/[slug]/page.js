import { getUserOrderById } from "@services/orderService";
import OrderDetail from "./OrderDetail";
const OrderDetailPage = async ({ params }) => {
  const orderId = params.slug;
  const order = await getUserOrderById(orderId);
  return <OrderDetail order={order} />;
};

export default OrderDetailPage;
