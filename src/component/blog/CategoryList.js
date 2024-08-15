"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFilter } from "@context/CategoryContext";

const CategoryList = ({ categoryList }) => {
  const searchParams = useSearchParams();
  const { handleNavigation } = useFilter();

  const currentCategory = searchParams.get("category")
    ? searchParams.get("category").toLowerCase().replaceAll("_", " ")
    : "";
  const formatCategoryParams = (category) => {
    return category.toUpperCase().replaceAll(" ", "_");
  };
  return (
    <div className="block-content">
      <div className="post-cats-list">
        <ul>
          {categoryList?.map(({ _id, count }) => (
            <li key={_id} className={_id === currentCategory ? "current" : ""}>
              <span
                onClick={(e) =>
                  handleNavigation({ key: "category", value: formatCategoryParams(_id) })
                }>
                {_id} <span className="count">{count}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
