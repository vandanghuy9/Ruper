import ProductDetail from "./ProductDetail";
import ProductServices from '../../../services/productService'
const Product = ()=>{
    return(
        <ProductDetail></ProductDetail>
    )
}

export default Product;

export const generateStaticParams = async ()=>{
  const products = await ProductServices.getShowProduct();
  return products.map((product) => ({
    slug: product.id
  }))
}