import React from "react";
import MyAccount from "./MyAccount";
import { getUserAddress } from "@services/userService";

const AccountPage = async () => {
  const userInfo = await getUserAddress();

  return <MyAccount userInfo={userInfo} />;
};

export default AccountPage;
