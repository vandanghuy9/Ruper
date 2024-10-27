"use client";
import React, { useState, useEffect } from "react";
import { getSearchResult } from "@services/productService";
const useSearch = (search) => {
  const [productList, setProductList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isFetched = false;
    if (search !== "") {
      setLoading(true);
      const searchQuery = new URLSearchParams({ search });
      getSearchResult(searchQuery.toString()).then((res) => {
        setProductList(res?.products);
        setBlogList(res?.blogs);
        setLoading(false);
      });
    }

    return () => {
      isFetched = true;
    };
  }, [search]);

  return { productList, blogList, loading };
};

export default useSearch;
