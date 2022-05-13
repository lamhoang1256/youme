import ReactHlsPlayer from "react-hls-player/dist";

interface VideoPlayerProps {
  src: string;
  playerRef: React.RefObject<HTMLVideoElement>;
}

const VideoPlayer = ({ src, playerRef }: VideoPlayerProps) => {
  return (
    <ReactHlsPlayer
      src={src || ""}
      autoPlay={false}
      controls
      width="100%"
      height="auto"
      playerRef={playerRef}
    />
  );
};

export default VideoPlayer;
