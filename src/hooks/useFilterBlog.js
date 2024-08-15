import { useSearchParams, usePathname, useRouter, redirect } from "next/navigation";

const useFilterBlog = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigation = (value) => {
    console.log(value);
    const category = searchParams.get("category");
    const page = searchParams.get("page");
    const layout = searchParams.get("layout");
    const sidebar = searchParams.get("sidebar");
    const query = searchParams.get("query");
    const params = new URLSearchParams({
      ...(category && { category }),
      ...(page && { page }),
      ...(layout && { layout }),
      ...(sidebar && { sidebar }),
      ...(query && { query }),
      ...{ [value.key]: value.value },
    });
    console.log(`${pathname}?${params.toString()}`);
    router.push(`${pathname}?${params.toString()}`);
  };
  return { handleNavigation };
};

export default useFilterBlog;
