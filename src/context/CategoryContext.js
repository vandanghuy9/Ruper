"use client";
import { createContext, useContext } from "react";
import {
  useSearchParams,
  usePathname,
  useRouter,
  redirect,
} from "next/navigation";
const Context = createContext();
export const CategoryContext = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const layout = searchParams.has("layout")
    ? searchParams.get("layout")
    : "grid";
  const sidebar = searchParams.has("sidebar")
    ? searchParams.get("sidebar")
    : "left";
  const handleNavigation = (value) => {
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const size = searchParams.get("size");
    const brand = searchParams.get("brand");
    const page = searchParams.get("page");
    // const layout = searchParams.get("layout");
    const sort = searchParams.get("sort");
    // const sidebar = searchParams.get("sidebar");
    const query = searchParams.get("query");
    const tags = searchParams.getAll("tag");
    const params = new URLSearchParams({
      ...(category && { category }),
      ...(price && { price }),
      ...(size && { size }),
      ...(brand && { brand }),
      ...(page && { page }),
      ...(layout && { layout }),
      ...(sort && { sort }),
      ...(sidebar && { sidebar }),
      ...(query && { query }),
      ...{ [value.key]: value.value },
    });
    tags.forEach((item) => {
      params.append("tag", item);
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilter = () => {
    router.push(`${pathname}`);
  };
  return (
    <Context.Provider
      value={{ handleNavigation, clearFilter, layout, sidebar }}
    >
      {children}
    </Context.Provider>
  );
};

export const useFilter = () => useContext(Context);
