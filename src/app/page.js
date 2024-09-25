import { getShowProduct } from "../services/productService";
import HomePage from "./home-page";
import {
  CleanHomePage,
  CollectionHomePage,
  GridHomePage,
  MinimalHomePage,
  ModernHomepage,
  StylishHomepage,
} from "@component/home";
const Page = async ({ params, searchParams }) => {
  const type = searchParams?.type;
  const products = await getShowProduct();
  if (!type) {
    return <HomePage products={products}></HomePage>;
  }
  if (type === "CLEAN") {
    return <CleanHomePage products={products} />;
  }
  if (type === "COLLECTION") return <CollectionHomePage products={products} />;
  if (type === "GRID") {
    return <GridHomePage products={products} />;
  }
  if (type === "MINIMAL") return <MinimalHomePage products={products} />;
  if (type === "MODERN") return <ModernHomepage products={products} />;
  if (type === "STYLISH") return <StylishHomepage products={products} />;
};

export default Page;
