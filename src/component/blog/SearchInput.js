"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { useFilter } from "@context/CategoryContext";

const SearchInput = () => {
  const { handleNavigation, clearFilter } = useFilter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchQuery: "",
    },
  });

  const onSubmit = (data) => {
    handleNavigation({ key: "query", value: data.searchQuery });
  };
  return (
    <div className="block block-post-search">
      <div className="block-title row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <h2>Search</h2>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <button
            className="button button-clear-filter"
            type="button"
            onClick={(e) => {
              clearFilter();
            }}
          >
            Clear all filters
          </button>
        </div>
      </div>
      <div className="block-content">
        <form className="search-from" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("searchQuery")}
            className="s"
            placeholder="Search..."
          />
          <button className="btn" type="submit">
            <IoSearchOutline size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
