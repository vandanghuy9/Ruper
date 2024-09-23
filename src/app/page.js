import { getShowProduct } from "../services/productService";
import HomePage from "./home-page";
import { getShowBlog } from "@services/blogService";
import { CleanHomePage, CollectionHomePage, GridHomePage } from "@component/home";
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
    const sampleBlog = await getShowBlog();
    return <GridHomePage products={products} blogList={sampleBlog} />;
  }
};

export default Page;
