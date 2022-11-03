import axios from "axios";
import { server } from "configs/server";

import { GetServerSidePropsContext } from "next";
import { IMovieDetails } from "types";

// http://localhost:3000/api/movie?category=0&id=10377

const WatchPage = ({ data }: any) => {
  console.log("data: ", data);
  return <div>Movie</div>;
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

export default WatchPage;
