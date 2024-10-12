import { useSearchParams } from "next/navigation";

const useGetParams = (params) => {
  const searchParams = useSearchParams();
  const homePageType = searchParams.get(params);
  return homePageType;
};

export default useGetParams;
