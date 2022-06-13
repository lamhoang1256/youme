import { getArticles } from "apis/configAPI";
import useSWRInfinite from "swr/infinite";

export const useFetchArticles = () => {
  const getKey = (index: number) => `articles-${index || 0}`;
  const { data, size, setSize, error } = useSWRInfinite(
    getKey,
    (key) => getArticles(Number(key.split("articles-").slice(-1)[0])),
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
