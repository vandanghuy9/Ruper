"use server";
import "server-only";
import { sendGetRequest, sendPostRequest } from "./requestService";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
const saveOrder = async (body) => {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  try {
    const res = await sendPostRequest(`/order/save`, body, { token });
    revalidatePath("/user/orders", "page");
    return res;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return { status: 401, message: error.response.data.message };
    } else {
      console.error("Error sending data:", error);
    }
  }
};

async function getUserOrder() {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  return sendGetRequest("/order/", { token });
}

export { saveOrder, getUserOrder };
