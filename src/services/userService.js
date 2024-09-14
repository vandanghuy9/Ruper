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

async function verifyEmail(body) {
  return sendPostRequest("/user/verify", body).catch((e) => {
    throw e;
  });
}

async function register(token) {
  return sendPostRequest("/user/register", { token }).catch((error) => {
    console.log(error.response.data.message);
  });
}

async function addToWishList(productId) {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  return sendPostRequest(
    "/wishlist/add",
    { product: productId },
    { token }
  ).catch((error) => {
    if (error.response && error.response.status === 401) {
      return { status: 401, message: error.response.data.message };
    } else {
      console.error("Error sending data:", error);
    }
  });
}

async function fetchUserWishList() {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  return sendGetRequest("/wishlist/", { token });
}

async function removeFromWishList(productId) {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  return sendPostRequest(
    "/wishlist/delete",
    { product: productId },
    { token }
  ).catch((error) => {
    if (error.response && error.response.status === 401) {
      return { status: 401, message: error.response.data.message };
    } else {
      console.error("Error sending data:", error);
    }
  });
}

async function sendUserQuestion(formData) {
  const userMessage = {
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  };

  return userMessage.name;
}
async function getUserAddress() {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  return sendGetRequest("/user/address", { token });
}

async function updateUserInfo(formData) {
  const cookieStore = cookies();
  const token = cookieStore.has("accessToken")
    ? cookieStore.get("accessToken").value
    : null;
  const userMessage = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    displayName: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password_current"),
    newPassword: formData.get("password_1"),
    confirmPassword: formData.get("password_2"),
  };

  return sendPostRequest("/user/update", userMessage, { token }).catch(
    (error) => {
      if (error.response && error.response.status === 401) {
        return { status: 401, message: error.response.data.message };
      } else {
        console.error("Error sending data:", error);
      }
    }
  );
}
async function forgotPassword(userLogin) {
  return sendPostRequest("/user/forgot-password", userLogin).catch((e) => {
    throw e;
  });
}

async function recoverPassword(userRecover) {
  return sendPostRequest("/user/recover", userRecover).catch((e) => {
    throw e.response.data.message;
  });
}

export {
  login,
  verifyEmail,
  addToWishList,
  fetchUserWishList,
  removeFromWishList,
  sendUserQuestion,
  getUserAddress,
  updateUserInfo,
  register,
  forgotPassword,
  recoverPassword,
};
