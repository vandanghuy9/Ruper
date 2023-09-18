import Link from "next/link";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
const MobileFooter = () => {
  return (
    <>
      <div className="shop-page">
        <Link href={"/shop-grid-left"}>
          <button type="button" style={{ backgroundColor: "transparent" }}>
            <BsShopWindow size={30} />
          </button>
        </Link>
      </div>

      <div className="my-account">
        <div className="login-header">
          <Link href={"/page-my-account"}>
            <button type="button" style={{ backgroundColor: "transparent" }}>
              <AiOutlineUser size={30} />
            </button>
          </Link>
        </div>
      </div>

      <div className="search-box">
        <div className="search-toggle">
          <Link href={"/"}>
            <button type="button" style={{ backgroundColor: "transparent" }}>
              <AiOutlineSearch size={30} />
            </button>
          </Link>
        </div>
      </div>

      <div className="wishlist-box">
        <Link href={"/wish-list"}>
          <button type="button" style={{ backgroundColor: "transparent" }}>
            <AiOutlineHeart size={30} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default MobileFooter;
