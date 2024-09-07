"use server";
import "server-only";
import { sendGetRequest, sendPostRequest } from "./requestService";
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
  return sendPostRequest("/products/reviews", body);
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
