import ReactHlsPlayer from "react-hls-player/dist";
import { IMovieMedia, IWatchSubtitles } from "interfaces/watch";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

interface WatchPlayerProps {
  playerRef: React.RefObject<HTMLVideoElement>;
  subtitles: IWatchSubtitles[];
  qualities: IMovieMedia[];
}

const WatchPlayer = ({ subtitles, qualities }: WatchPlayerProps) => {
  const subtitleList = subtitles.map((subtitle: IWatchSubtitles) => {
    return {
      lang: subtitle.languageAbbr,
      language: subtitle.language,
      url: `${process.env.REACT_APP_SRT_TO_VTT}/?url=${subtitle.subtitlingUrl}`,
    };
  });
  const qualityList = qualities.map((quality) => {
    return {
      quality: quality.qualityDesc.description,
      url: quality.mediaUrl,
    };
  });

  return (
    <Player src={qualityList} subtitles={subtitleList}>
      {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} autoPlay />}
    </Player>
  );
};

export default WatchPlayer;
