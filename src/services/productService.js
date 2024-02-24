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
  getProductsByCategory(category) {
    return sendGetRequest(`/products/filter?category=${category}`);
  },
};

export default ProductServices;
