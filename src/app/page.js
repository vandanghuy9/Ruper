import { getShowProduct } from "../services/productService";
import HomePage from "./home-page";
const Page = async () => {
  const products = await getShowProduct();
  return <HomePage products={products}></HomePage>;
};

export default Page;
