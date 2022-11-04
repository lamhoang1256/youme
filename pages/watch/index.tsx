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
import { MovieCard } from "modules/MovieCard";
import { MovieList } from "modules/MovieList";

interface WatchPageProps {
  data: any;
}

const WatchPage = ({ data }: WatchPageProps) => {
  console.log("data: ", data);
  const playerRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="container">
      <div className={styles.box}>
        <div className={styles.box1}>
          <MediaPlayer playerRef={playerRef} qualities={data.sources} subtitles={data.subtitles} />
          <h1 className={styles.heading}>{data.name}</h1>
          <WatchMeta
            areaList={data.areaList}
            countCurrEpisode={data.currentEpisode}
            countFullEpisode={data.episodeCount}
            year={data.year}
            score={data.score}
          />
          <WatchCategory categories={data.tagList} />
          <WatchSummary introduction={data.introduction} />
        </div>
        <div className={styles.box2}>
          <WatchAnthology detailMovie={data} />
        </div>
      </div>
      <MovieList heading="You may like">
        {data.likeList.map((movie: any) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.name}
              coverVerticalUrl={movie.coverVerticalUrl}
              domainType={movie.category}
            />
          );
        })}
      </MovieList>
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
