"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { useShopProduct } from "@context/ShopProductContext";
import useSearch from "@hooks/useSearch";
import NavbarBlogItem from "@component/blog/NavbarBlogItem";
const suggestList = [
  {
    href: "/shop?category=FURNITURE",
    text: "Furniture",
  },
  {
    href: "/shop?category=HOME_DECOR",
    text: "Home Décor",
  },

  {
    href: "/shop?category=OFFICE",
    text: "Office",
  },

  {
    href: "/shop?category=LIGHTING",
    text: "Lighting",
  },
];

const SearchPopUp = () => {
  const { handleToggleSearchPopUp, searchPopUpActive, handleClickSuggestList } =
    useShopProduct();
  const [search, setSearch] = useState("");
  const { productList, blogList, loading } = useSearch(search);
  return (
    <div
      className={`search-overlay ${searchPopUpActive ? "search-visible" : ""}`}
    >
      <div className="close-search" onClick={handleToggleSearchPopUp}></div>
      <div className="wrapper-search overflow-x-scroll overflow-y-scroll">
        <form role="search" className="search-from ajax-search">
          <div className="search-box">
            <button id="searchsubmit" className="btn" type="submit">
              <AiOutlineSearch />
            </button>
            <input
              id="myInput"
              type="text"
              autoComplete="off"
              value={search}
              name="s"
              className="input-search s"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search-top">
              <div className="close-search" onClick={(e) => setSearch("")}>
                Cancel
              </div>
            </div>
            <div className="content-menu_search ">
              {!search ? (
                <>
                  <label>Suggested</label>
                  <ul id="menu_search" className="menu">
                    {suggestList.map(({ href, text }) => (
                      <li
                        key={href}
                        onClick={(e) => handleClickSuggestList(href)}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <label>Product</label>
                  <div className="cart-list-wrap">
                    <ul className="cart-list ">
                      {productList.map((item) => (
                        <ProductCard key={item._id} product={item} />
                      ))}
                    </ul>
                  </div>

                  <label>Blog</label>
                  <div className="block block-posts recent-posts p-t-5">
                    <ul className="posts-list">
                      {blogList?.map((item) => (
                        <NavbarBlogItem key={item._id} blog={item} />
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPopUp;
