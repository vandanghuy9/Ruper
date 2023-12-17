import ProductServices from "../services/productService";
import HomePage from "./home-page";
const Page = async () => {
  const products = await ProductServices.getShowProduct();
  return <HomePage products={products}></HomePage>;
};

export default Page;
