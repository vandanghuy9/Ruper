"use server";
import "server-only";
import { sendGetRequest } from "./requestService";
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

export {
  getShowProduct,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
  getFeatureProducts,
  getCompareProducts,
};
