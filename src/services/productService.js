import { sendGetRequest } from "./requestService";
const ProductServices = {
  getShowProduct() {
    return sendGetRequest("/products/show");
  },
};

export default ProductServices;