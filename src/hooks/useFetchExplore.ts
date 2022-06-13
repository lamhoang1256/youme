import { filterByCategory } from "apis/configAPI";
import useSWRInfinite from "swr/infinite";

export const useFetchExplore = (filters: any) => {
  const getKey = (index: any, prevData: any) => {
    if (prevData && prevData.length === 0) return null;
    const sort = prevData?.slice(-1)?.[0]?.sort || "";
    return `${JSON.stringify(filters)}explore-${sort}`;
  };
  const { data, size, setSize, error } = useSWRInfinite(
    getKey,
    (key) => filterByCategory({ ...filters, sort: key.split("explore-")[1] }),
    {
      revalidateFirstPage: false,
    },
  );
  return {
    data,
    size,
    setSize,
    error,
  };
};
