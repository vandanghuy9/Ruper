"use server";
import "server-only";
import { sendGetRequest, sendPostRequest } from "./requestService";
import { revalidatePath } from "next/cache";
const getShowProduct = async () => {
  return sendGetRequest("/products/show");
};

const getProductById = async (id) => {
  return sendGetRequest(`/products/${id}`);
};
const getRelatedProducts = async (id) => {
  return sendGetRequest(`/products/related/${id}`);
};
const getProductsByCategory = async (query) => {
  return sendGetRequest(`/products/filter?${query}`);
};

const getFeatureProducts = async () => {
  return sendGetRequest(`/products/feature`);
};

const getCompareProducts = async (product) => {
  return sendGetRequest(`/products/compare?product=${product}`);
};

const saveProductReviews = async (body) => {
  const res = await sendPostRequest("/products/reviews", body);
  revalidatePath(`/product/${body.productId}`, "page");
  return res;
};

export {
  getShowProduct,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
  getFeatureProducts,
  getCompareProducts,
  saveProductReviews,
};
