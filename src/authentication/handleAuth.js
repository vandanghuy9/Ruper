"use server";
import {
  login,
  verifyEmail,
  register,
  forgotPassword,
  recoverPassword,
} from "@services/userService";
import { cookies } from "next/headers";
const cookieTimeOut = 0.5;
export default async function handleLogin(formData) {
  const cookieStore = cookies();
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
    rememberme: formData.get("rememberme"),
  };
  const body = {};
  if (rawFormData.username?.indexOf("@") !== -1) {
    body.email = rawFormData.username;
  } else {
    body.username = rawFormData.username;
  }
  body.password = rawFormData.password;
  try {
    const res = await login(body);
    const { token, ...userInfor } = res;
    if (rawFormData.rememberme) {
      const userId = cookieStore.set("userId", userInfor?._id);
      const userName = cookieStore.set("userName", userInfor?.name);
      const userEmail = cookieStore.set("userEmail", userInfor?.email);
    }
    const accessToken = cookieStore.set("accessToken", token);
    const wishlist = userInfor?.wishlist;
    return { userInfor, wishlist };
  } catch (e) {
    console.log(e.response.data.message);
  }
}

export const handleVerifyEmail = async (formData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const res = await verifyEmail(rawFormData);
    return res;
  } catch (e) {
    throw e.response.data.message;
  }
};

export const handleRegister = async (token) => {
  try {
    const res = await register(token);
    return res;
  } catch (e) {
    throw e.response.data.message;
  }
};

export const handleForgotPassword = async (formData) => {
  try {
    const rawFormData = {
      userLogin: formData.get("user_login"),
    };
    const res = await forgotPassword({ userLogin: rawFormData.userLogin });
    return res;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const handleLogout = async () => {
  const cookieStore = cookies();
  cookieStore.delete("accessToken");
  if (cookieStore.has("userId")) {
    cookieStore.delete("userId");
  }
  if (cookieStore.has("userName")) {
    cookieStore.delete("userName");
  }
  if (cookieStore.has("userEmail")) {
    cookieStore.delete("userEmail");
  }
};
export const handleRecoverPassword = async (formData, token) => {
  const rawFormData = {
    newPassword: formData.get("new_password"),
    confirmPassword: formData.get("confirm_password"),
  };
  if (rawFormData.newPassword !== rawFormData.confirmPassword) {
    return {
      status: false,
      message: "New Password and Confirm Password do not match !",
    };
  }
  return {
    newPassword: rawFormData.newPassword,
    confirmPassword: rawFormData.confirmPassword,
    status: true,
  };
};

export const isUserLogin = async () => {
  const cookieStore = cookies();
  return cookieStore.has("accessToken");
};
