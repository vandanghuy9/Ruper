import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const instance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export const sendGetRequest = async (url) => {
  const result = await instance.get(url).then((res) => res.data);
  return result;
};
