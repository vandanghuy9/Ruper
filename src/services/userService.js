"use server";
import { sendPostRequest, sendGetRequest } from "./requestService";
import { cookies } from "next/headers";

async function login(body) {
  return sendPostRequest("/user/login", body).catch((error) => {
    if (error.response && error.response.status === 401) {
      return { status: 401, message: error.response.data.message };
      // Handle unauthorized access (e.g., display error message)
    } else {
      // Handle other errors (network issues, etc.)
      console.error("Error fetching data:", error);
    }
  });
}

async function register(body) {
  console.log(body);
}

async function addToWishList(productId) {
  console.log(productId);
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;
  return sendPostRequest("/wishlist/add", { product: productId }, { token }).catch((error) => {
    if (error.response && error.response.status === 401) {
      return { status: 401, message: error.response.data.message };
    } else {
      console.error("Error sending data:", error);
    }
  });
}

async function fetchUserWishList() {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken") ? cookieStore.get("accessToken").value : null;

  return sendGetRequest("/wishlist/", { token });
}
export { login, register, addToWishList, fetchUserWishList };
