import ProductDetail from "./ProductDetail";
import {
  getShowProduct,
  getProductById,
  getRelatedProducts,
} from "../../../services/productService";
import { title } from "process";
const Product = async ({ params }) => {
  const product = await getProduct(params.slug);
  const relatedProducts = await getRelatedProduct(params.slug);
  return <ProductDetail product={product} relatedProducts={relatedProducts}></ProductDetail>;
};

export default Product;

export const generateMetadata = async ({ params }) => {
  const product = await getProduct(params.slug);
  return {
    title: product.name,
  };
};
export const generateStaticParams = async () => {
  const products = await getShowProduct();
  return products.map((product) => ({
    slug: product.id,
  }));
};

export const getProduct = async (id) => {
  const product = await getProductById(id);
  return product;
};

export const getRelatedProduct = async (id) => {
  const relatedProducts = await getRelatedProducts(id);
  return relatedProducts;
};
