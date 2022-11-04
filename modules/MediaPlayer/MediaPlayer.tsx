const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
});
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import { IQuality, ISubtitle } from "types";
import dynamic from "next/dynamic";

interface MediaPlayerProps {
  playerRef: React.RefObject<HTMLVideoElement>;
  subtitles: ISubtitle[];
  qualities: IQuality[];
}

const MediaPlayer = ({ subtitles, qualities }: MediaPlayerProps) => {
  return (
    <Player src={qualities} subtitles={subtitles}>
      {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} autoPlay />}
    </Player>
  );
};

export default MediaPlayer;
