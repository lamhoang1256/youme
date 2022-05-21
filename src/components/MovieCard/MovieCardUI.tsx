import { Link } from "react-router-dom";

interface MovieCardUIProps {
  type: string;
  children: React.ReactNode;
  url: string;
}

const MovieCardUI = ({ type, children, url }: MovieCardUIProps) => {
  return (
    <>
      {type === "movie" && <Link to={url}>{children}</Link>}
      {type === "actor" && <> {children}</>}
    </>
  );
};

export default MovieCardUI;
