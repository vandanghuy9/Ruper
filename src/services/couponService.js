"use server";
import "server-only";
import { sendGetRequest } from "./requestService";

const getCouponByCode = async (id) => {
  return sendGetRequest("/coupon/" + id).catch((e) => {
    throw e.response.data.message;
  });
};
export { getCouponByCode };
