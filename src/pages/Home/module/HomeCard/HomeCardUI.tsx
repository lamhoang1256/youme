import { Link } from "react-router-dom";

interface HomeCardUIProps {
  type: string;
  children: React.ReactNode;
  url: string;
}

const HomeCardUI = ({ type, children, url }: HomeCardUIProps) => {
  return (
    <>
      {type === "movie" && <Link to={url}>{children}</Link>}
      {type === "actor" && <> {children}</>}
    </>
  );
};

export default HomeCardUI;
