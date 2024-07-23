"use client";
import { createContext, useContext } from "react";
import { useSearchParams, usePathname, useRouter, redirect } from "next/navigation";
const Context = createContext();
export const CategoryContext = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigation = (value) => {
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const size = searchParams.get("size");
    const brand = searchParams.get("brand");
    const page = searchParams.get("page");
    const layout = searchParams.get("layout");
    const sort = searchParams.get("sort");
    const sidebar = searchParams.get("sidebar");
    const params = new URLSearchParams({
      ...(category && { category }),
      ...(price && { price }),
      ...(size && { size }),
      ...(brand && { brand }),
      ...(page && { page }),
      ...(layout && { layout }),
      ...(sort && { sort }),
      ...(sidebar && { sidebar }),
      ...{ [value.key]: value.value },
    });
    console.log(`${pathname}?${params.toString()}`);
    router.push(`${pathname}?${params.toString()}`);
  };
  return <Context.Provider value={{ handleNavigation }}>{children}</Context.Provider>;
};

export const useFilter = () => useContext(Context);
