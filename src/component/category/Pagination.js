"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Pagination = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = parseInt(searchParams.get("page") || 1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const setUrl = (page) => {
    if (page > totalPages) {
      return "";
    }
    if (page <= 0) return "";
    let params = null;
    params = new URLSearchParams(searchParams);
    params.set("page", page);

    let currentURL = `${pathname}?${params}`;
    return currentURL;
  };

  return (
    <nav className="pagination">
      <ul className="page-numbers">
        <li>
          <Link className="prev page-numbers" href={setUrl(currentPage - 1)}>
            <FaChevronLeft size={10} />
          </Link>
        </li>
        {pages.map((item) => (
          <li key={item}>
            <Link
              aria-current="page"
              className={`page-numbers ${currentPage === item ? "current" : ""}`}
              href={setUrl(item)}>
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link className="next page-numbers" href={setUrl(currentPage + 1)}>
            <FaChevronRight size={10} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
