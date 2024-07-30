"use server";
import { login, register } from "@services/userService";
import { cookies } from "next/headers";
const cookieTimeOut = 0.5;
export default async function handleLogin(formData) {
  const cookieStore = cookies();
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
    rememberme: formData.get("rememberme"),
  };
  const res = await login({
    username: rawFormData.username,
    password: rawFormData.password,
  });
  if (res.status && res.status === 401) {
    return res;
  } else {
    const { token, ...userInfor } = res;
    if (rawFormData.rememberme) {
      const userId = cookieStore.set("userId", userInfor?._id);
      const userName = cookieStore.set("userName", userInfor?.name);
      const userEmail = cookieStore.set("userEmail", userInfor?.email);
    }
    const accessToken = cookieStore.set("accessToken", token);
    const wishlist = userInfor?.wishlist;
    return { userInfor, wishlist };
  }
}

export const handleRegister = async (formData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(rawFormData);
};
