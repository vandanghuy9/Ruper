"use client";
import { useFilter } from "@context/CategoryContext";
import { blogTags } from "@utils/data";
import { useSearchParams } from "next/navigation";
const TagList = () => {
  const { handleNavigation } = useFilter();
  const searchParams = useSearchParams();
  const tags = searchParams.getAll("tag");
  const formattedTags = tags.map((item) => (item.indexOf("_") ? item.replaceAll("_", " ") : item));
  return (
    <ul>
      {blogTags.map(({ _id }) => (
        <li key={_id} className={formattedTags.includes(_id) ? "current" : ""}>
          <span
            onClick={(e) => {
              handleNavigation({ key: "tag", value: _id.replaceAll(" ", "_") });
            }}>
            {_id}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
