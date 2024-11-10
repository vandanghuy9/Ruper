import ProductDetail from "./ProductDetail";
import {
  getShowProduct,
  getProductById,
  getRelatedProducts,
} from "../../../services/productService";
const Product = async ({ params }) => {
  const slug = params.slug;
  const product = await getProduct(slug);
  const relatedProducts = await getRelatedProduct(slug);
  return <ProductDetail product={product} relatedProducts={relatedProducts}></ProductDetail>;
};

export default Product;

export const generateMetadata = async ({ params }) => {
  const slug = (await params).slug;
  const product = await getProduct(slug);
  return {
    title: product.name,
  };
};

const getProduct = async (id) => {
  const product = await getProductById(id);
  return product;
};

const getRelatedProduct = async (id) => {
  const relatedProducts = await getRelatedProducts(id);
  return relatedProducts;
};
