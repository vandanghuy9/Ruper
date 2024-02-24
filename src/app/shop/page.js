import ShopCategory from "./ShopCategory";
import ProductServices from "@services/productService";
const getProduct = async () => {
  return await ProductServices.getShowProduct();
};

const Shop = async () => {
  const products = await getProduct();
  return <ShopCategory products={products} />;
};
export default Shop;
