import axios from "axios";
import { server } from "configs/server";
import { LayoutHome } from "layouts/LayoutHome";
import { MovieCard } from "modules/MovieCard";
import { MovieDetails } from "modules/MovieDetails";
import { MovieList } from "modules/MovieList";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { IMovieDetails } from "types";

interface MovieDetailsPageProps {
  data: IMovieDetails;
}

const MovieDetailsPage = ({ data }: MovieDetailsPageProps) => {
  console.log("data: ", data);
  return (
    <LayoutHome>
      <div className="container">
        <MovieDetails details={data} />
        <MovieList heading="You may like">
          {data.likeList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.name}
              coverVerticalUrl={movie.coverVerticalUrl}
              domainType={movie.category}
            />
          ))}
        </MovieList>
      </div>
    </LayoutHome>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id as string;
  const category = params?.category as string;
  try {
    const { data } = await axios.get(`${server}/api/movie`, {
      params: { id, category },
    });
    return {
      props: { data: data.data },
      revalidate: 300,
    };
  } catch (error) {
    return {
      props: {},
      revalidate: 60,
      notFound: true,
    };
  }
};

export default MovieDetailsPage;
