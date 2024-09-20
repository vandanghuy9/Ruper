import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import { getShowBlog } from "@services/blogService";
import { getShowProduct } from "@services/productService";
const Navbar = async () => {
  const sampleBlog = await getShowBlog();
  const sampleProduct = await getShowProduct();
  return (
    <header id="site-header" className="site-header">
      <NavBarMobile blogList={sampleBlog} sampleProduct={sampleProduct?.at(0)} />
      <NavBarDesktop blogList={sampleBlog} sampleProduct={sampleProduct?.at(0)} />
    </header>
  );
};

export default Navbar;
