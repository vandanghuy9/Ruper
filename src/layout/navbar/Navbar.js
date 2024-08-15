import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import { getShowBlog } from "@services/blogService";
const Navbar = async () => {
  const sampleBlog = await getShowBlog();
  return (
    <>
      <NavBarMobile />
      <NavBarDesktop blogList={sampleBlog} />
    </>
  );
};

export default Navbar;
