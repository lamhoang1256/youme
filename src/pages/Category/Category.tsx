import { getAllGenres, getMovieByCategory } from "apis/configAPI";
import useSWRInfinite from "swr/infinite";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { IExploreCard } from "interfaces/explore";
import { Genres } from "interfaces/api";
import MovieList from "components/MovieList/MovieList";
import { StyledCategory } from "./category.style";

const Category = () => {
  const id = Number(useParams().id);
  const [movieList, setMovieList] = useState<IExploreCard[]>([]);
  const [allGenres, setAllGenres] = useState<Genres[]>([]);
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

  const getKey = (indexPage: any, previousPageData: any) => {
    if (previousPageData && previousPageData.length === 0) return null;
    const sort = previousPageData?.data?.searchResults.slice(-1)[0].sort || "";
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
    const newMovieList = data?.reduce(
      (prevExplore: any, currExplore: any) => [...prevExplore, ...currExplore.data.searchResults],
      [],
    );
    setMovieList(newMovieList);
  }, [data]);

  return (
    <StyledCategory>
      <div className="container">
        {nameCategory && (
          <div className="category-breadcum">
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <h4> {">"} </h4>
            <h4 className="category-name">{nameCategory}</h4>
          </div>
        )}
        {nameCategory && <h3 className="category-name">{nameCategory}</h3>}
        <InfiniteScroll
          dataLength={data?.length || 0}
          next={() => setSize((size) => size + 1)}
          hasMore={!error && data?.slice(-1)[0].data.searchResults.length !== 0}
          loader={<h4>Loading...</h4>}
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
