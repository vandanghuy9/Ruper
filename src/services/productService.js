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
};

export default ProductServices;
