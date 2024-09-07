import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import { getShowBlog } from "@services/blogService";
import { getShowProduct } from "@services/productService";
const Navbar = async () => {
  const sampleBlog = await getShowBlog();
  const sampleProduct = await getShowProduct();
  return (
    <>
      <NavBarMobile />
      <NavBarDesktop
        blogList={sampleBlog}
        sampleProduct={sampleProduct?.at(0)}
      />
    </>
  );
};

export default Navbar;
