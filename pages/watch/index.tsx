import axios from "axios";
import { server } from "configs/server";
import { MediaPlayer } from "modules/MediaPlayer";
import { MovieSuggest } from "modules/MovieSuggest";
import { WatchMeta } from "modules/WatchMeta";
import { GetServerSidePropsContext } from "next";
import { useRef } from "react";
import { IEpisode } from "types";
import styles from "styles/watch.module.scss";
import { WatchCategory } from "modules/WatchCategory";
import { WatchSummary } from "modules/WatchSummary";
import { WatchAnthology } from "modules/WatchAnthology";

interface WatchPageProps {
  data: IEpisode;
}

const WatchPage = ({ data }: WatchPageProps) => {
  console.log("data: ", data);
  const playerRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="container">
      <div className="layout">
        <div className="main">
          <MediaPlayer playerRef={playerRef} qualities={data.sources} subtitles={data.subtitles} />
          <h1 className={styles.heading}>{data.name}</h1>
          <WatchMeta
            areaList={data.areaList}
            countCurrEpisode={data.episodeVo}
            countFullEpisode={data.episodeCount}
            year={data.year}
            score={data.score}
          />
          <WatchCategory categories={data.tagList} />
          <WatchSummary introduction={data.introduction} />
          {/* <WatchAnthology detailMovie={data} detailCurrentPlay={data} /> */}
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
