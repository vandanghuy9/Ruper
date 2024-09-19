import OrderHistory from "./OrderHistory";
import { getUserOrder } from "@services/orderService";
import { isUserLogin } from "../../../authentication/handleAuth";
import { redirect } from "next/navigation";
const OrderHistoryPage = async () => {
  const isLogin = await isUserLogin();
  if (!isLogin) {
    return redirect("/login?redirect=/user/orders");
  }
  const orders = await getUserOrder();
  return <OrderHistory orders={orders} />;
};

export default OrderHistoryPage;
