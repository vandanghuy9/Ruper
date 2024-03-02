import "server-only";
import { sendGetRequest } from "./requestService";
const ProductServices = {
  getShowProduct() {
    return sendGetRequest("/products/show");
  },
  getProductById(id) {
    return sendGetRequest(`/products/${id}`);
  },
  getRelatedProducts(id) {
    return sendGetRequest(`/products/related/${id}`);
  },
  getProductsByCategory(query) {
    return sendGetRequest(`/products/filter?${query}`);
  },

  getFeatureProducts() {
    return sendGetRequest(`/products/feature`);
  },
};

export default ProductServices;
