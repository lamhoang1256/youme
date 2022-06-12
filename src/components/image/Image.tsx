import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  to?: string;
  url: string;
  alt?: string;
  className?: string;
}

const Image = ({ to, url, alt, className }: ImageProps) => {
  if (to) {
    return (
      <Link to={to} style={{ display: "block" }}>
        <LazyLoadImage className={className} src={url} effect="opacity" alt={alt} />
      </Link>
    );
  }
  return <LazyLoadImage className={className} src={url} effect="opacity" alt={alt} />;
};

Image.defaultProps = {
  to: "",
  alt: "",
  className: "",
};

export default Image;
