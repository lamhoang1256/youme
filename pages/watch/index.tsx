import axios from "axios";
import { server } from "configs/server";
import { MediaPlayer } from "modules/MediaPlayer";
import { MovieSuggest } from "modules/MovieSuggest";
import { GetServerSidePropsContext } from "next";
import { useRef } from "react";

const WatchPage = ({ data }: any) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="container">
      <div className="layout">
        <div className="main">
          <MediaPlayer playerRef={playerRef} qualities={data.sources} subtitles={data.subtitles} />
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
    const { data } = (await axios.get(`${server}/api/episode`, { params: query })).data;
    return {
      props: { data },
    };
  } catch (error) {
    console.log("error: ", error);
  }
}

export default WatchPage;
