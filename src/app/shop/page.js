import ShopCategory from "./ShopCategory";
import ProductServices from "@services/productService";
import { menu } from "@utils/data";
import { getCategoryQuantity } from "@utils/menu";
const getProducts = async () => {
  return await ProductServices.getShowProduct();
};

const getFilterProducts = async (query) => {
  return await ProductServices.getProductsByCategory(query);
};

const getFeatureProducts = async (query) => {
  return await ProductServices.getFeatureProducts();
};
const Shop = async ({ params, searchParams }) => {
  let products = await getProducts();
  const categoryMenu = getCategoryQuantity(menu, products);
  const category = searchParams?.category;
  const size = searchParams?.size;
  const currentPage = searchParams?.currentPage;
  const brand = searchParams?.brand;
  const price = searchParams?.price;
  const currentHeading = menu.find((item) => item.key === category);
  let showProducts = [];
  if (
    category === undefined &&
    size === undefined &&
    currentPage === undefined &&
    brand === undefined &&
    price === undefined
  ) {
    showProducts = [...showProducts, ...products];
  } else {
    let query = "";
    if (category) {
      if (query.length > 0) {
        query = query.concat(`&category=${category}`);
      } else {
        query = query.concat(`category=${category}`);
      }
    }
    if (brand) {
      if (query.length > 0) {
        query = query.concat(`&brand=${brand}`);
      } else {
        query = query.concat(`brand=${brand}`);
      }
    }
    if (price) {
      if (query.length > 0) {
        query = query.concat(`&price=${price}`);
      } else {
        query = query.concat(`price=${price}`);
      }
    }
    if (size) {
      if (query.length > 0) {
        query = query.concat(`&size=${size}`);
      } else {
        query = query.concat(`size=${size}`);
      }
    }
    showProducts = await getFilterProducts(query);
  }
  const featureProducts = await getFeatureProducts();
  return (
    <ShopCategory
      products={showProducts}
      categoryMenu={categoryMenu}
      category={category}
      brand={brand}
      size={size}
      page={currentPage}
      price={price}
      heading={currentHeading ? currentHeading.category : "Bed & Bath"}
      featureProducts={featureProducts}
    />
  );
};
export default Shop;
