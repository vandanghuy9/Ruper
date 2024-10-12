"use client";
import { useShopProduct } from "@context/ShopProductContext";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const { handleToggleSearchPopUp } = useShopProduct();

  return (
    <div className="search-box" onClick={handleToggleSearchPopUp}>
      <div className="search-toggle">
        <AiOutlineSearch size={25} />
      </div>
    </div>
  );
};

export default SearchBox;
