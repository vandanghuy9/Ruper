"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFilter } from "@context/CategoryContext";
const SortMenu = () => {
  const { handleNavigation } = useFilter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const options = [
    { value: "DEFAULT", id: 0, content: "Default sorting" },
    { id: 1, value: "POPULARITY", content: "Sort by popularity" },
    { id: 2, value: "RATING", content: "Sort by average rating" },
    { id: 3, value: "LATEST", content: "Sort by latest" },
    {
      id: 4,
      value: "PRICE_LOW_TO_HIGH",
      content: "Sort by price: low to high",
    },
    {
      id: 5,
      value: "PRICE_HIGH_TO_LOW",
      content: "Sort by price: high to low",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSelect = (value) => {
    handleNavigation({ key: "sort", value });
    setOpen((prevOpen) => !prevOpen);
  };

  const currentOption = useMemo(() => {
    if (sort) {
      const sortedValue = options.find((item) => item.value === sort);
      return sortedValue;
    }
    return {
      value: "DEFAULT",
      id: 0,
      content: "Default sorting",
    };
  }, [sort, options]);
  return (
    <div
      className={
        open ? "products-sort dropdown show" : "products-sort dropdown"
      }
    >
      <span
        className="sort-toggle dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
        onClick={handleOpen}
      >
        {currentOption.content}
      </span>
      <ul
        className={
          open ? "sort-list dropdown-menu show" : "sort-list dropdown-menu"
        }
      >
        {options.map(({ id, value, content }, index) => (
          <li
            key={index}
            value={value}
            className={currentOption.value === value ? "active" : ""}
            onClick={(e) => {
              handleSelect(value);
            }}
          >
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortMenu;
