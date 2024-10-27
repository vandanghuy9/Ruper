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
          {search !== "" && (
            <div className="result-search-products-content" style={{ display: "block" }}>
              <div className="result-search-products" style={{ display: "block" }}>
                <ul className="items-search">
                  {productList.map(({ _id, name, imageUrl, price, discount }) => (
                    <li className="item-search" key={_id}>
                      <Link className="item-image" href={`/product/${_id}`}>
                        <Image src={imageUrl[0]} alt="product" width={70} height={70} />
                      </Link>
                      <div className="item-content">
                        <Link href={`/product/${_id}`} title="Chair Oak Matt Lacquered">
                          <span>{name}</span>
                        </Link>
                        <div className="price">
                          $
                          {discount ? (
                            <>
                              <del>
                                <span>${price}</span>
                              </del>
                              <ins>
                                <span>${Math.ceil((price * (100 - discount)) / 100)}</span>
                              </ins>
                            </>
                          ) : (
                            <>${price}</>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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
