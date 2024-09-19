import React from "react";
import Address from "./Address";
import { getUserAddress } from "@services/userService";
import { isUserLogin } from "../../../authentication/handleAuth";
import { redirect } from "next/navigation";

const AddressPage = async () => {
  const isLogin = await isUserLogin();
  if (!isLogin) {
    return redirect("/login?redirect=/user/addresses");
  }

  const userAddress = await getUserAddress();
  return <Address address={userAddress} />;
};

export default AddressPage;
