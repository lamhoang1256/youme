import ReactHlsPlayer from "react-hls-player/dist";
import { MovieMedia } from "interfaces/api";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

interface ISubtitles {
  language: string;
  languageAbbr: string;
  subtitlingUrl: string;
  translateType: number;
}

interface WatchPlayerProps {
  playerRef: React.RefObject<HTMLVideoElement>;
  subtitles: ISubtitles[];
  qualities: MovieMedia[];
}

const WatchPlayer = ({ subtitles, qualities }: WatchPlayerProps) => {
  const subtitleList = subtitles.map((subtitle: ISubtitles) => {
    return {
      lang: subtitle.languageAbbr,
      language: subtitle.language,
      url: `${process.env.REACT_APP_SRT_TO_VTT}/?url=${subtitle.subtitlingUrl}`,
    };
  });
  const qualityList = qualities.map((quality) => {
    return {
      quality: quality.quanlityDesc.description,
      url: quality.mediaUrl,
    };
  });

  return (
    <Player src={qualityList} subtitles={subtitleList}>
      {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
    </Player>
  );
};

export default WatchPlayer;
