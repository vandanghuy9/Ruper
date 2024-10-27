"use server";
import "server-only";
import { sendGetRequest, sendPostRequest } from "./requestService";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
const saveOrder = async (body) => {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;
  try {
    const res = await sendPostRequest(`/order/save`, body, { token });
    revalidatePath("/user/orders", "page");
    return res;
  } catch (error) {
    throw error.response.data.message;
  }
};

async function getUserOrder() {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;
  return sendGetRequest("/order/", { token });
}

async function getUserOrderById(id) {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;
  return sendGetRequest("/order/" + id, { token });
}
const handleCardPayment = async (body) => {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;
  try {
    const res = await sendPostRequest(`/order/card_payment`, body, { token });
    return res;
  } catch (error) {
    throw error.response.data.message;
  }
};

const saveCardPaymentOrder = async (body) => {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;
  try {
    const res = await sendPostRequest(`/order/save_card_payment`, body, { token });
    revalidatePath("/user/orders", "page");
    return res;
  } catch (error) {
    throw error.response.data.message;
  }
};

export { saveOrder, getUserOrder, getUserOrderById, handleCardPayment, saveCardPaymentOrder };
