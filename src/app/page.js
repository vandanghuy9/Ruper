import { getShowProduct } from "../services/productService";
import HomePage from "./home-page";
import {
  CleanHomePage,
  CollectionHomePage,
  GridHomePage,
  MinimalHomePage,
  ModernHomepage,
  StylishHomepage,
  UniqueHomepage,
  SplitHomepage,
  GothicHomepage,
  LuxuryHomepage,
  ScandinavianHomepage,
  MidCenturyHomepage,
  RetroHomepage,
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
  if (type === "UNIQUE") return <UniqueHomepage products={products} />;
  if (type === "SPLIT") return <SplitHomepage products={products} />;
  if (type === "GOTHIC") return <GothicHomepage products={products} />;
  if (type === "LUXURY") return <LuxuryHomepage products={products} />;
  if (type === "SCANDINAVIAN") return <ScandinavianHomepage products={products} />;
  if (type === "MID_CENTURY") return <MidCenturyHomepage products={products} />;
  if (type === "RETRO") return <RetroHomepage products={products} />;
};

export default Page;
