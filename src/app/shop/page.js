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
  const sort = searchParams?.sort;
  const layout = searchParams?.layout ? searchParams?.layout : "grid";
  const sidebar = searchParams?.sidebar ? searchParams?.sidebar : "left";
  const currentHeading = menu.find((item) => item.key === category);
  let showProducts = [];
  if (
    category === undefined &&
    size === undefined &&
    currentPage === undefined &&
    brand === undefined &&
    price === undefined &&
    sort === undefined &&
    layout === undefined &&
    sidebar === undefined
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
    if (sort) {
      if (query.length > 0) {
        query = query.concat(`&sort=${sort}`);
      } else {
        query = query.concat(`sort=${sort}`);
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
      layout={layout}
      sidebar={sidebar}
    />
  );
};
export default Shop;
