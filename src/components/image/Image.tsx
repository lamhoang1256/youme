import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "constants/resizeImage";
import { Link } from "react-router-dom";

interface ImageProps {
  to?: string;
  url: string;
  width?: string;
  height?: string;
  alt?: string;
  className?: string;
}

const Image = ({ to, url, width, height, alt, className }: ImageProps) => {
  if (to) {
    return (
      <Link to={to} style={{ display: "block" }}>
        <LazyLoadImage
          className={className}
          src={resizeImage(url, width, height)}
          effect="opacity"
          alt={alt}
        />
      </Link>
    );
  }
  return (
    <LazyLoadImage
      className={className}
      src={resizeImage(url, width, height)}
      effect="opacity"
      alt={alt}
    />
  );
};

Image.defaultProps = {
  to: "",
  height: "",
  width: "",
  alt: "",
  className: "",
};

export default Image;
