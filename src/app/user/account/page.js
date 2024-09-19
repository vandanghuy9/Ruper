import React from "react";
import MyAccount from "./MyAccount";
import { getUserAddress } from "@services/userService";
import { isUserLogin } from "../../../authentication/handleAuth";
import { redirect } from "next/navigation";
const AccountPage = async () => {
  const isLogin = await isUserLogin();
  if (!isLogin) {
    return redirect("/login?redirect=/user/account");
  }
  const userInfo = await getUserAddress();

  return <MyAccount userInfo={userInfo} />;
};

export default AccountPage;
