import Dashboard from "./Dashboard";
import { isUserLogin } from "../../../authentication/handleAuth";
import { redirect } from "next/navigation";
export const metadata = {
  title: "My account | Ruper",
};

const DashboardPage = async () => {
  const isLogin = await isUserLogin();
  if (!isLogin) {
    return redirect("/login?redirect=/user/dashboard");
  }
  return <Dashboard />;
};

export default DashboardPage;
