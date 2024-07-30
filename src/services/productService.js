"use server";
import { sendGetRequest } from "./requestService";
// const ProductServices = {
//   getShowProduct() {
//     return sendGetRequest("/products/show");
//   },
//   getProductById(id) {
//     return sendGetRequest(`/products/${id}`);
//   },
//   getRelatedProducts(id) {
//     return sendGetRequest(`/products/related/${id}`);
//   },
//   getProductsByCategory(query) {
//     return sendGetRequest(`/products/filter?${query}`);
//   },

//   getFeatureProducts() {
//     return sendGetRequest(`/products/feature`);
//   },
// };

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
// export default ProductServices;

export {
  getShowProduct,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
  getFeatureProducts,
};
