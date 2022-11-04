import axios from "axios";
import { server } from "configs/server";
import { MovieDetails } from "modules/MovieDetails";
import { MovieSuggest } from "modules/MovieSuggest";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { IMovieDetails } from "types";

interface MovieDetailsPageProps {
  data: IMovieDetails;
}

const MovieDetailsPage = ({ data }: MovieDetailsPageProps) => {
  return (
    <div className="container">
      <div className="layout">
        <div className="main">
          <MovieDetails details={data} />
        </div>
        <div className="sidebar">
          <MovieSuggest listSuggest={data.likeList} />
        </div>
      </div>
    </div>
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
