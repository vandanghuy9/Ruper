"use server";
import "server-only";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
// export async function bearerAuth() {
//   const COOKIES = cookies();
//   const token = COOKIES.has("accessToken") ? COOKIES.get("accessToken").value : "";
//   return `Bearer ${token}`;
// }
export const sendGetRequest = async (url, config) => {
  const instance = axios.create({
    baseURL: `${process.env.BASE_URL}`,
    timeout: 500000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: config?.token && `Bearer ${config?.token}`,
    },
  });
  const result = await instance
    .request({
      method: "GET",
      url: url,
    })
    .then((res) => res.data);
  return result;
};

export const sendPostRequest = async (url, body, headers = null) => {
  const instance = axios.create({
    baseURL: `${process.env.BASE_URL}`,
    timeout: 500000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: headers?.token && `Bearer ${headers?.token}`,
    },
  });
  const result = await instance.post(url, body).then((res) => res.data);
  return result;
};
