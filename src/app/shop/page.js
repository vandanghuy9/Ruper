import ShopCategory from "./ShopCategory";
import {
  getShowProduct,
  getProductsByCategory,
  getFeatureProducts,
} from "@services/productService";
import { menu } from "@utils/data";
import { getCategoryQuantity } from "@utils/menu";
const getProducts = async () => {
  return await getShowProduct();
};

const getFilterProducts = async (query) => {
  return await getProductsByCategory(query);
};
const Shop = async ({ params, searchParams }) => {
  const PAGE_LIMIT = 6;
  let products = await getProducts();
  const categoryMenu = getCategoryQuantity(menu, products);
  const category = searchParams?.category;
  const size = searchParams?.size;
  const currentPage = searchParams?.page || 1;
  const brand = searchParams?.brand;
  const price = searchParams?.price;
  const sort = searchParams?.sort;
  const layout = searchParams?.layout ? searchParams?.layout : "grid";
  const sidebar = searchParams?.sidebar ? searchParams?.sidebar : "left";
  const currentHeading = menu.find((item) => item.key === category);
  if (
    category === undefined &&
    size === undefined &&
    brand === undefined &&
    price === undefined &&
    sort === undefined &&
    layout === undefined &&
    sidebar === undefined
  ) {
    const res = await getFilterProducts(`page=${currentPage}&limit=${PAGE_LIMIT}`);
    const featureProducts = await getFeatureProducts();
    return (
      <ShopCategory
        products={res?.products}
        categoryMenu={categoryMenu}
        category={category}
        brand={brand}
        size={size}
        page={currentPage}
        price={0}
        heading={currentHeading ? currentHeading.category : "Bed & Bath"}
        featureProducts={featureProducts}
        layout={layout}
        sidebar={sidebar}
        totalPages={res?.totalPages}
      />
    );
  }
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
  if (currentPage) {
    if (query.length > 0) {
      query = query.concat(`&page=${currentPage}&limit=${PAGE_LIMIT}`);
    } else {
      query = query.concat(`page=${currentPage}&limit=${PAGE_LIMIT}`);
    }
  }
  const res = await getFilterProducts(query);
  const featureProducts = await getFeatureProducts();
  return (
    <ShopCategory
      products={res?.products}
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
      totalPages={res?.totalPages}
    />
  );
};
export default Shop;
