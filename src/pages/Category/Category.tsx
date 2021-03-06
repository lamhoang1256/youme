import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllGenres, getMovieByCategory } from "apis/configAPI";
import { IGenres } from "types/explore";
import MovieList from "components/movie/MovieList";
import { IMovieCard } from "types/components";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import LoadingSpinner from "components/loading/LoadingSpinner";
import { StyledCategory } from "./category.style";

const Category = () => {
  const id = Number(useParams().id);
  const [movieList, setMovieList] = useState<IMovieCard[]>([]);
  const [allGenres, setAllGenres] = useState<IGenres[]>([]);
  const nameCategory = allGenres[0]?.screeningItems
    .find((item) => item.id === 5)
    ?.items.find((item) => item.params === `${id}`)?.name;

  const fetchGenres = async () => {
    try {
      const { data } = await getAllGenres();
      setAllGenres(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getKey = (index: any, prevData: any) => {
    if (prevData && prevData.length === 0) return null;
    const sort = prevData?.data?.searchResults.slice(-1)[0].sort || "";
    return `${JSON.stringify(id)}sort-${sort}`;
  };
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => getMovieByCategory({ category: id, sort: key.split("sort-")[1] }),
    {
      revalidateFirstPage: false,
    },
  );

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!data) return;
    const newData = data?.reduce(
      (prevData: any, currData: any) => [...prevData, ...currData.data.searchResults],
      [],
    );
    setMovieList(newData);
  }, [data]);

  return (
    <StyledCategory>
      <div className="container">
        {nameCategory && (
          <Breadcrumb
            crumbs={[
              { id: 1, label: "Home", path: "/" },
              { id: 2, label: nameCategory, path: "/" },
            ]}
          />
        )}
        {nameCategory && <h3 className="category-name">{nameCategory}</h3>}
        <InfiniteScroll
          dataLength={data?.length || 0}
          next={() => setSize((size) => size + 1)}
          hasMore={!error && data?.slice(-1)[0].data.searchResults.length !== 0}
          loader={<LoadingSpinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <MovieList movieList={movieList} />
        </InfiniteScroll>
      </div>
    </StyledCategory>
  );
};

export default Category;
