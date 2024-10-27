"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useSearch from "@hooks/useSearch";
import Link from "next/link";
import Image from "next/image";
const LuxurySearchForm = () => {
  const [search, setSearch] = useState("");
  const { productList, blogList, loading } = useSearch(search);
  return (
    <div className="header-search-form hidden-md hidden-sm hidden-xs">
      <form className="search-from ajax-search">
        <div className="search-box">
          <input
            type="text"
            value={search}
            name="s"
            id="ss"
            autoComplete="off"
            className="input-search s"
            placeholder="What are you looking for?"
            onChange={(e) => setSearch(e.target.value)}
          />
          {productList.length > 0 && (
            <div
              className="result-search-products-content"
              style={{ display: "block" }}
            >
              <div className="result-search-products">
                hello
                <ul className="items-search"></ul>
              </div>
            </div>
          )}
        </div>
        <button id="search-submit" className="btn" type="button">
          <span className="search-icon">
            <AiOutlineSearch color="#fff" size={20} />
          </span>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default LuxurySearchForm;
