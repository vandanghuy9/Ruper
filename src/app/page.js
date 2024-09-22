import { getShowProduct } from "../services/productService";
import HomePage from "./home-page";
import { CleanHomePage, CollectionHomePage } from "@component/home";
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
};

export default Page;
