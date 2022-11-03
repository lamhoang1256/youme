import axios from "axios";
import { server } from "configs/server";
import { MovieDetails } from "modules/MovieDetails";
import { MovieSuggest } from "modules/MovieSuggest";
import { GetServerSidePropsContext } from "next";
import { IMovieDetails } from "types";

// http://localhost:3000/api/movie?category=0&id=10377

interface MovieDetailsPageProps {
  data: IMovieDetails;
}

const MovieDetailsPage = ({ data }: MovieDetailsPageProps) => {
  console.log("data: ", data);
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
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  try {
    const { data } = (await axios.get(`${server}/api/movie`, { params: query })).data;
    return {
      props: { data },
    };
  } catch (error) {
    console.log("error: ", error);
  }
}

export default MovieDetailsPage;
