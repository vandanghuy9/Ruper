import React from "react";
import Address from "./Address";
import { getUserAddress } from "@services/userService";
const AddressPage = async () => {
  const userAddress = await getUserAddress();
  return <Address address={userAddress} />;
};

export default AddressPage;
